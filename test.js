let db = require('./index')();

db.defaults({
        posts: [],
        user: {}
    })
    .write();

db.get('posts').push({
        id: 2,
        title: 'lowdb is awesome'
    })
    .write();
    
let data = db.get('posts').find({
    id: 2
}).value();

console.log(data);