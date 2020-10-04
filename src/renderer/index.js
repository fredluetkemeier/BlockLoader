import { Elm } from './Main';
import Store from '../store';
import { ipcRenderer } from 'electron';
import { BrowserWindow, dialog } from '@electron/remote';
import { createBrowserHistory } from 'history';

// ------
// STARTUP
// ------

const store = new Store({
    configName: 'user-config',
    initialData: { modPath: '', installedMods: [] },
});

const { modPath, installedMods } = store.getAll();

const history = createBrowserHistory({
    basename: location,
});

const app = Elm.Main.init({
    flags: JSON.stringify({
        modPath,
        installedMods,
    }),
});

// ------
// EVENTS
// ------
ipcRenderer.on('downloadFinished', (event, { mod }) => {
    const installedMods = store.get('installedMods');
    store.set('installedMods', [...installedMods, mod]);
});

ipcRenderer.on('uninstallFinished', (event, { id }) => {
    const installedMods = store.get('installedMods');
    store.set(
        'installedMods',
        installedMods.filter((mod) => mod.id != id)
    );

    app.ports.modUninstalled.send(id);
});

// ------
// PORTS
// ------

// Main
app.ports.sendMinimize.subscribe(() =>
    BrowserWindow.getFocusedWindow().minimize()
);

app.ports.sendMaximize.subscribe(() => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    focusedWindow.isMaximized()
        ? focusedWindow.unmaximize()
        : focusedWindow.maximize();
});

app.ports.sendExit.subscribe(() => ipcRenderer.send('exit'));

app.ports.pushUrl.subscribe((url) => {
    history.push(url);
    app.ports.changedUrl.send(location.href);
});

ipcRenderer.on('downloadProgress', (event, { id, percentage }) =>
    app.ports.downloadProgress.send({ id, percentage })
);

// Welcome
app.ports.choosePath.subscribe(() => {
    dialog
        .showOpenDialog({
            properties: ['openDirectory'],
        })
        .then(({ filePaths }) => filePaths[0])
        .then((directory) => {
            if (directory) {
                app.ports.pathChosen.send(directory);
            }
        });
});

app.ports.savePath.subscribe((path) => store.set('modPath', path));

// Search
app.ports.downloadMod.subscribe((mod) => ipcRenderer.send('download', mod));

// Installed
app.ports.uninstallMod.subscribe(({ id, fileName }) => {
    const modPath = store.get('modPath');

    ipcRenderer.send('uninstall', { id, fileName, modPath });
});
