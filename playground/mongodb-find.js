//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB Server.')
    }
    console.log('Connected to MongoDB server.');

    //   db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    // db.collection('Todos').find(
    //     {
    //         _id: new ObjectID('598f0b729c455cad7a99fdab')
    //     }
    // ).toArray().then((docs) => {

    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log('Unable to fetch Todos', err);
    // });
db.collection('Users').find({name: 'Dave'}).toArray().then((docs) => {
    console.log('Users for Dave:');
    console.log(JSON.stringify(docs, undefined, 2));
}, (error) => {
    console.lot('Unable to fetch Users', err);
});

 db.collection('Users').count().then((count) => {
        console.log(`Users: ${count}`);
    }, (error) => {
        console.log('Unable to fetch Users', err);
    });

 db.collection('Todos').count().then((count) => {
        console.log(`Todos: ${count}`);
    }, (error) => {
        console.log('Unable to fetch Todos', err);
    });

    // db.close();
});