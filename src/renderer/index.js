import { Elm } from './Main';
import Store from '../store';
import { ipcRenderer, remote } from 'electron';

const store = new Store({
    configName: 'user-config',
    initialData: { modPath: '', installedMods: [] },
});

const window = remote.BrowserWindow;

const { modPath, installedMods } = store.getAll();

const app = Elm.Main.init({
    flags: {
        modPath,
        installedMods,
        isMaximized: window.getFocusedWindow().isMaximized(),
    },
});

app.ports.sendMinimize.subscribe(() => window.getFocusedWindow().minimize());
app.ports.sendMaximize.subscribe(() => window.getFocusedWindow().maximize());
app.ports.sendUnmaximize.subscribe(() =>
    window.getFocusedWindow().unmaximize()
);
app.ports.sendExit.subscribe(() => ipcRenderer.send('exit'));
