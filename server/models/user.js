// user
var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

// var newUser = new User({
//    email: 'a@b.com'
// });

// newUser.save().then((doc) => {
//     console.log(JSON.stringify('Saved user', undefined, 2), doc);
// }, (e) => {
//     console.log('Unable to save User', e);
// });

module.exports = {User};