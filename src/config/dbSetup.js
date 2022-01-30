const mongoose = require('mongoose');
const connectionString = process.env.DATABASE_URI;

module.exports = function () {
   mongoose.connect(connectionString)
     .then(() => {
       console.log('Mongo Connection Open!');
     })
     .catch((err) => {
       console.log('Mongo Connection Error!', err);
     })
}
