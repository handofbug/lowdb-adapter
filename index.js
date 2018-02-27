/* jshint -W119, -W104*/
module.exports = function (fileName = 'db.json', adapterName = 'FileSync', options = {
    encrypt: true,
    pass = 42
}) {

    let crypto = require('crypto'),
        algorithm = 'aes-256-ctr',
        password = options.pass;

    function encrypt(text) {
        var cipher = crypto.createCipher(algorithm, password)
        var crypted = cipher.update(text, 'utf8', 'hex')
        crypted += cipher.final('hex');
        return crypted;
    }

    function decrypt(text) {
        var decipher = crypto.createDecipher(algorithm, password)
        var dec = decipher.update(text, 'hex', 'utf8')
        dec += decipher.final('utf8');
        return dec;
    }

    let low = require('lowdb'),
        FileSync = require('lowdb/adapters/FileSync'),
        FileAsync = require('lowdb/adapters/FileAsync'),
        Memory = require('lowdb/adapters/Memory');

    switch (adapterName.toLowerCase()) {
        case 'filesync':
            let adapterFileSync = null;
            if (encrypt) {
                adapterFileSync = new FileSync(fileName, {
                    serialize: (data) => encrypt(JSON.stringify(data)),
                    deserialize: (data) => JSON.parse(decrypt(data))
                });
            } else {
                adapterFileSync = new FileSync(fileName);
            }
            return low(adapterFileSync);
        case 'fileasync':
            let adapterFileAsync = null;
            if (encrypt) {
                adapterFileAsync = new FileAsync(fileName, {
                    serialize: (data) => encrypt(JSON.stringify(data)),
                    deserialize: (data) => JSON.parse(decrypt(data))
                });
            } else {
                let adapterFileAsync = new FileAsync(fileName);
            }
            return low(adapterFileAsync);
        case 'memory':
            return low(new Memory());
        default:
            return null;
    }
}