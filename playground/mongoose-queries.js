const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '598f65c2c4b5f3183c2815ee11';

// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid.');
// }

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '598f3ed00d665052ec29c2231';

// User Queries
User.findById(id).then((user) => {
    if (!user) {
        return console.log(`User with Id: ${id} not found`);
    }
    console.log(`User by Id`, user);
}).catch((e) => {
    console.log('Invalid id:', e);
});