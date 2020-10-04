const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const { startServer } = require('./server');
const { findAPortNotInUse } = require('portscanner');

require('@electron/remote/main').initialize();
const isDev = require('electron-is-dev');

let PORT;
let startupWindow;

// ------
// STARTUP
// ------
app.whenReady()
    .then(createStartupWindow)
    .then(() => findAPortNotInUse(3000, 9000))
    .then((port) => {
        PORT = port;
    })
    .then(() => startServer(PORT))
    .then(createMainWindow);

// ------
// EVENTS
// ------
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createMainWindow();
//     }
// });

//ipcMain.handle('exit', () => app.exit());
ipcMain.on('exit', () => app.exit());

ipcMain.on('download', async (event, { url, modPath, mod }) => {
    const { id, fileName } = mod;

    const { data, headers } = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
    });
    const totalLength = headers['content-length'];
    let downloaded = 0.0;

    const writer = fs.createWriteStream(path.resolve(modPath, fileName));

    data.on('data', (chunk) => {
        downloaded += chunk.length;
        event.reply('downloadProgress', {
            id,
            percentage: +(downloaded / totalLength),
        });
    });

    data.pipe(writer);

    writer.on('finish', () => event.reply('downloadFinished', { mod }));
});

ipcMain.on('uninstall', async (event, { id, fileName, modPath }) => {
    fs.unlink(path.resolve(modPath, fileName), () =>
        event.reply('uninstallFinished', { id })
    );
});

// WINDOWS

function createStartupWindow() {
    startupWindow = new BrowserWindow({
        width: 250,
        height: 300,
        show: false,
        movable: false,
        maximizable: false,
        minimizable: false,
        resizable: false,
        alwaysOnTop: true,
        frame: false,
    });

    startupWindow.loadFile(path.join(__dirname, '../../assets/startup.html'));

    startupWindow.once('ready-to-show', () => {
        startupWindow.show();
    });
}

function createMainWindow() {
    const window = new BrowserWindow({
        width: 1000,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            webSecurity: false,
        },
        show: false,
        frame: false,
        movable: true,
    });

    window.loadURL(`http://localhost:${PORT}`);

    window.once('ready-to-show', () => {
        startupWindow.hide();
        window.show();

        if (isDev) window.webContents.openDevTools();
    });
}
