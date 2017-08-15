var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let db = {
//   localhost: 'mongodb://localhost:27017/TodoApp',
//   mlab: 'mongodb://<user>:<pass>@ds149268.mlab.com:49268/todoapp'
// };
// mongoose.connect( db.localhost || db.mlab);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');//, { useMongoClient: true });

module.exports = {mongoose};