# lowdb-adapter  [![NPM version](https://badge.fury.io/js/lowdb-adapter.svg)](http://badge.fury.io/js/lowdb-adapter)

> Makes it easy to connect [lowdb](https://github.com/typicode/lowdb) in one string

## Install

```bash
# Just use it
npm install lowdb-adapter --save
```
## API
#### (fileName = 'db.json', adapterName = 'FileSync', options = {})
```js
let db = require('lowdb-adapter')();
db.get('posts').push({id: 2).write();
```
#### filename
Default 'db.json'.

#### adapterName
Default 'FileSync'. Can be:

1. FileSync
2. FileAsync
3. Memory

#### options
Default {encrypt : true, pass: 42}
Used [crypto](https://nodejs.org/api/crypto.html)

## License

MIT
