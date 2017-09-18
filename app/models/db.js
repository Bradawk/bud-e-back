let mongoose = require('mongoose');
let db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/bude');

db.on('open', function(err) {
  console.log('✔ CONNECTED TO LOCALHOST DB');
});
