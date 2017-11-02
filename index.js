/* jshint -W119, -W104*/
module.exports = function (fileName = 'db.json', adapterName = 'FileSync', encrypt = false) {
    const low = require('lowdb'),
        FileSync = require('lowdb/adapters/FileSync');
    switch (adapterName.toLowerCase()) {
        case 'filesync':
            const adapterFileSync = new FileSync(fileName);
            return low(adapterFileSync);
        case 'memory':
            return low();
        default:
            return null;
    }
}