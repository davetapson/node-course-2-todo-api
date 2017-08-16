const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// remove all
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//
Todo.findOneAndRemove({_id:'59945662878f87471067ef43'}).then.((todo) =>{
    console.log(todo);
});

Todo.findByIdAndRemove('59945662878f87471067ef43').then((todo)=>{
    console.log(todo);
});
