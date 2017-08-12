//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) =>{
    if(error){
        return console.log('Unable to connect to MongoDB Server.')
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert Todo.', error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Dave',
    //     age: 53,
    //     location: 'Benoni'
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert User.', error);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });
    db.close();
});