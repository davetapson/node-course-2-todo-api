var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useMongoClient: true });

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var newTodo = new Todo({
//     text: 'Cook dinner',
//     completed: true,
//     completedAt: 123
// });

// newTodo.save().then((doc) => {
//     console.log(JSON.stringify('Saved todo', undefined, 2), doc);
// }, (e) => {
//     console.log('Unable to save Todo', e);
// });

// var otherTodo = new Todo({
//     text: '  Edit this video  '
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify('Saved otherTodo', undefined, 2), doc);
// }, (e) => {
//     console.log('Unable to save otherTodo', e);
// });

// user
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
   email: 'a@b.com'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify('Saved user', undefined, 2), doc);
}, (e) => {
    console.log('Unable to save User', e);
});