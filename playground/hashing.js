 const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (error, salt)=>{
bcrypt.hash(password, salt, (error, hash)=>{
    console.log(hash);
})
});

var hashedPassword = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTUwMzE0Nzk4OX0.VXa7j6NMpbYrYfajWg9MmmdExGC7YVYkDQ623-le6Ok';
bcrypt.compare(password, hashedPassword, (error, result)=>{
    console.log(result);
})

var data = {
    id: 10
}

// var token = jwt.sign(data, '123abc');
// console.log(token);


// var decodedata = jwt.verify(token, '123abc');
// console.log(decodedata);
// //jwt.verify
// var message = 'I am user number 4';

// var hash = SHA256(message).toString();

// console.log('Message: ', message);
// console.log('Hash: ', hash);

// var data = {
//     id: 4
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.hash=SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('data was not changed');
// } else {
//     console.log('Data was changed. Do not trust');
// }

