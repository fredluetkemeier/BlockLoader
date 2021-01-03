import { Elm } from './Main';
import Store from './store';
import { ipcRenderer } from 'electron';

// ------
// STARTUP
// ------
//
const store = new Store({
    configName: 'user-config',
    initialData: { modPath: '', installedMods: [] },
});

const { modPath, installedMods } = store.getAll();

const app = Elm.Main.init({
    flags: JSON.stringify({
        modPath,
        installedMods,
    }),
});

ipcRenderer.send('request-app-version');

// ------
// EVENTS
// ------
//
ipcRenderer.on('app-version', (_event, appVersion) =>
    app.ports.appVersionReceived(appVersion)
);

ipcRenderer.on('update-available', () => app.ports.updateAvailable.send(null));

ipcRenderer.on('downloadProgress', (_event, { id, percentage }) =>
    app.ports.downloadProgress.send({ id, percentage })
);

ipcRenderer.on('downloadFinished', (_event, { mod }) => {
    const installedMods = store.get('installedMods');
    store.set('installedMods', [...installedMods, mod]);
});

ipcRenderer.on('uninstallFinished', (_event, { id }) => {
    const installedMods = store.get('installedMods');
    store.set(
        'installedMods',
        installedMods.filter((mod) => mod.id != id)
    );

    app.ports.modUninstalled.send(id);
});

ipcRenderer.on('mods-moved', () => app.ports.modsMoved.send(null));

// ------
// PORTS
// ------
//

// Shared
app.ports.choosePath.subscribe(() => ipcRenderer.send('open-mod-path-dialog'));

ipcRenderer.on('mod-path-chosen', (_, directory) =>
    app.ports.pathChosen.send(directory)
);

app.ports.savePath.subscribe((path) => store.set('modPath', path));

// Main
app.ports.sendMinimize.subscribe(() => ipcRenderer.send('minimize'));

app.ports.sendMaximize.subscribe(() => ipcRenderer.send('maximize'));

app.ports.sendExit.subscribe(() => ipcRenderer.send('exit'));

app.ports.updateApp.subscribe(() => ipcRenderer.send('update-app'));

app.ports.changeUrl.subscribe((url) => app.ports.changedUrl.send(url));

// Search
app.ports.downloadMod.subscribe((mod) => ipcRenderer.send('download', mod));

// Installed
app.ports.uninstallMod.subscribe(({ id, fileName }) => {
    const modPath = store.get('modPath');
    ipcRenderer.send('uninstall', { id, fileName, modPath });
});

// Settings
app.ports.moveMods.subscribe(({ from, to }) => {
    ipcRenderer.send('move-mods', { from, to });
});
