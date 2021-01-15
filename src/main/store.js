const { app } = require('electron');
const path = require('path');
const fs = require('fs');

class Store {
    constructor({ configName, initialData }) {
        const userDataPath = app.getPath('userData');

        this.path = path.join(userDataPath, configName + '.json');

        if (!fs.existsSync(this.path)) {
            fs.writeFileSync(this.path, JSON.stringify(initialData));
        }

        this.data = parseData(this.path, initialData);
    }

    getAll() {
        return this.data;
    }

    get(key) {
        return this.data[key];
    }

    set(key, data) {
        this.data[key] = data;

        fs.writeFileSync(this.path, JSON.stringify(this.data));
    }
}

module.exports = Store;

function parseData(path, initialData) {
    try {
        return JSON.parse(fs.readFileSync(path));
    } catch (error) {
        return initialData;
    }
}
