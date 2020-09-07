const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const { startServer } = require('./server');
const { findAPortNotInUse } = require('portscanner');

let PORT;
let startupWindow;

app.whenReady()
    .then(() => findAPortNotInUse(3000, 9000))
    .then((port) => {
        PORT = port;
    })
    .then(createStartupWindow)
    .then(() => startServer(PORT))
    .then(createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});

ipcMain.on('exit', () => app.exit());
ipcMain.on('download', async (event, { url, modPath, fileName }) => {
    const { data, headers } = await axios({
        url,
        method: 'GET',
        responseType: 'stream',
    });
    const totalLength = headers['content-length'];

    const writer = fs.createWriteStream(path.resolve(modPath, fileName));

    data.on('data', (chunk) =>
        event.reply('downloadProgress', chunk.length / totalLength)
    );
    data.pipe(writer);
});

function createStartupWindow() {
    startupWindow = new BrowserWindow({
        width: 250,
        height: 300,
        webPreferences: { nodeIntegration: true },
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
        },
        show: false,
        frame: false,
        movable: true,
    });

    window.loadURL(`http://localhost:${PORT}`);

    window.once('ready-to-show', () => {
        startupWindow.hide();
        window.show();
    });

    window.webContents.openDevTools();
}
