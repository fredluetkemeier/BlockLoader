const { app, BrowserWindow } = require('electron');
const path = require('path');
const { startServer } = require('./server');

const PORT = 5000;

let startupWindow;

app.whenReady()
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
