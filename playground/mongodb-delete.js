//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB Server.')
    }
    console.log('Connected to MongoDB server.');

    // deleteMany
    db.collection('Users').deleteMany({name: 'Dave'}).then((result) => {
        console.log(result);
    });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('598f0665fabc3c1bb84f93c7') }).then((result) => {
        console.log(result);
    });

    // db.close();
});