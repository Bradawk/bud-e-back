let mongoose = require('mongoose');
let db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/datasetdb');

db.on('open', function(err) {
  console.log('✔ CONNECTED TO LOCALHOST DB');
});
