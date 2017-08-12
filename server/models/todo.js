// todo
var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: '  Edit this video  '
// });

// newTodo.save().then((doc) => {
//     console.log(JSON.stringify('Saved otherTodo', undefined, 2), doc);
// }, (e) => {
//     console.log('Unable to save otherTodo', e);
// });

module.exports = {Todo};