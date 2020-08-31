import { Elm } from './Main';
import Store from '../store';
import { ipcRenderer, remote } from 'electron';
import { createBrowserHistory } from 'history';

const store = new Store({
    configName: 'user-config',
    initialData: { modPath: '', installedMods: [] },
});

const window = remote.BrowserWindow;

const history = createBrowserHistory({
    basename: location,
});

const { modPath, installedMods } = store.getAll();

const app = Elm.Main.init({
    flags: {
        modPath,
        installedMods,
    },
});

// Navigation

app.ports.pushUrl.subscribe((url) => {
    history.push(url);
    app.ports.changedUrl.send(location.href);
});

// Main
app.ports.sendMinimize.subscribe(() => window.getFocusedWindow().minimize());

app.ports.sendMaximize.subscribe(() => {
    const focusedWindow = window.getFocusedWindow();
    focusedWindow.isMaximized()
        ? focusedWindow.unmaximize()
        : focusedWindow.maximize();
});

app.ports.sendExit.subscribe(() => ipcRenderer.send('exit'));

// Welcome

app.ports.choosePath.subscribe(() => {
    remote.dialog
        .showOpenDialog(remote.getCurrentWindow(), {
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
