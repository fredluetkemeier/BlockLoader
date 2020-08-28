const { app, BrowserWindow } = require('electron');
const { startServer } = require('./server');

const PORT = 5000;

function createWindow() {
    const window = new BrowserWindow({
        width: 1000,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    window.loadURL(`http://localhost:${PORT}`);

    window.webContents.openDevTools();
}

app.whenReady()
    .then(() => startServer(PORT))
    .then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
