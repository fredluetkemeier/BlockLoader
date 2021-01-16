const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const { startServer } = require('./server');
const { findAPortNotInUse } = require('portscanner');
const Store = require('./store');

const isDev = require('electron-is-dev');

let PORT;
let startupWindow;
let mainWindow;

autoUpdater.autoDownload = false;
autoUpdater.setFeedURL({
    provider: 'github',
    owner: 'fredluetkemeier',
    repo: 'block-loader',
});
setInterval(() => {
    autoUpdater.checkForUpdates();
}, 1000 * 60 * 15);

// ------
// STARTUP
// ------
const store = new Store({
    configName: 'user-config',
    initialData: { modPath: '', installedMods: [] },
});

app.whenReady()
    .then(createStartupWindow)
    .then(() => findAPortNotInUse(3000, 9000))
    .then((port) => {
        PORT = port;
    })
    .then(() => startServer(PORT))
    .then(createMainWindow);

// ------
// WINDOWS
// ------
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
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
        },
        show: false,
        frame: false,
        movable: true,
    });

    mainWindow.loadURL(`http://localhost:${PORT}`);

    mainWindow.once('ready-to-show', () => {
        startupWindow.close();
        mainWindow.show();

        autoUpdater.checkForUpdates();

        if (isDev) mainWindow.webContents.openDevTools();
    });
}

// ------
// EVENTS
// ------
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

ipcMain.handle('get-initial-data', () => {
    const { modPath, installedMods } = store.getAll();
    const appVersion = app.getVersion();

    return { modPath, installedMods, appVersion };
});

ipcMain.on('open-mod-path-dialog', (event) =>
    dialog
        .showOpenDialog({
            properties: ['openDirectory'],
        })
        .then(({ filePaths }) => filePaths[0])
        .then((directory) => {
            if (directory) event.reply('mod-path-chosen', directory);
        })
);

ipcMain.on('save-path', (event, path) => {
    store.set('modPath', path);
});

ipcMain.on('minimize', () => BrowserWindow.getFocusedWindow().minimize());

ipcMain.on('maximize', () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    focusedWindow.isMaximized()
        ? focusedWindow.unmaximize()
        : focusedWindow.maximize();
});

ipcMain.on('exit', () => app.exit());

autoUpdater.on('update-available', () =>
    mainWindow.webContents.send('update-available')
);

ipcMain.on('update-app', () => autoUpdater.downloadUpdate());

autoUpdater.on('update-downloaded', () =>
    autoUpdater.quitAndInstall(true, true)
);

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

    writer.on('finish', () => {
        const installedMods = store.get('installedMods');
        store.set('installedMods', [...installedMods, mod]);
    });
});

ipcMain.on('uninstall', async (event, { id, fileName }) => {
    const modPath = store.get('modPath');

    fs.unlink(path.resolve(modPath, fileName), () => {
        const installedMods = store.get('installedMods');
        store.set(
            'installedMods',
            installedMods.filter((mod) => mod.id != id)
        );

        event.reply('uninstall-finished', id);
    });
});

ipcMain.on('move-mods', (event, { from, to }) => {
    fs.readdir(from, (err, files) => {
        files.forEach((file) =>
            fs.copyFileSync(path.join(from, file), path.join(to, file))
        );

        event.reply('mods-moved');

        files.forEach((file) => fs.unlinkSync(path.join(from, file)));
    });
});
