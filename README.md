# lowdb-adapter  [![NPM version](https://badge.fury.io/js/lowdb-adapter.svg)](http://badge.fury.io/js/lowdb-adapter)

> Makes it easy to connect [lowdb](https://github.com/typicode/lowdb) in one string

## Install

```bash
# Just use it
npm install lowdb-adapter --save
```
## API
#### (fileName = 'db.json', adapterName = 'FileSync', encrypt = false)
```js
let db = require('lowdb-adapter')();
db.get('posts').push({
        id: 2,
        title: 'lowdb is awesome'
    })
    .write();
```
## License

MIT
