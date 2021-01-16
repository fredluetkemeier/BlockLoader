import { Elm } from './Main';
import { ipcRenderer } from 'electron';

// ------
// STARTUP
// ------
//

const { modPath, installedMods, appVersion } = await ipcRenderer.invoke(
    'get-initial-data'
);

const app = Elm.Main.init({
    flags: JSON.stringify({
        modPath,
        installedMods,
        appVersion,
    }),
});

// ------
// EVENTS
// ------
//

ipcRenderer.on('update-available', () => app.ports.updateAvailable.send(null));

ipcRenderer.on('downloadProgress', (_event, { id, percentage }) =>
    app.ports.downloadProgress.send({ id, percentage })
);

ipcRenderer.on('uninstall-finished', (_event, id) => {
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

app.ports.savePath.subscribe((path) => ipcRenderer.send('save-path', path));

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
    ipcRenderer.send('uninstall', { id, fileName });
});

// Settings
app.ports.moveMods.subscribe(({ from, to }) => {
    ipcRenderer.send('move-mods', { from, to });
});
