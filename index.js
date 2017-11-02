module.exports = function (fileName = 'db.json', adapterName = 'FileSync', encrypt = false) {
    const low = require('lowdb'),
        FileSync = require('lowdb/adapters/FileSync');
    switch (adapterName) {
        case 'FileSync':
            const adapter = new FileSync(fileName);
            const db = low(adapter);
            return db;
            break;

        default:
            return null;
            break;
    }

}