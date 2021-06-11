process.once('loaded', () => {
    const { contextBridge, ipcRenderer } = require('electron');

    contextBridge.exposeInMainWorld('ipcRenderer', {
        invoke(channel, ...args) {
            return ipcRenderer.invoke(channel, ...args);
        },
        send(channel, ...args) {
            ipcRenderer.send(channel, ...args);
        },
        on(channel, ...args) {
            ipcRenderer.on(channel, ...args);
        },
    });
});
