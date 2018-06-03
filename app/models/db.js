let mongoose = require('mongoose');
let db = mongoose.connection;

if(process.env.VCAP_SERVICES){
  var svcs = JSON.parse(process.env.VCAP_SERVICES);
  mongoose.connect(svcs['mlab'][0].credentials.uri);
}else{
  mongoose.connect('mongodb://mongodb:27017/bude');
}

db.on('open', function(err) {
  console.log('✔ CONNECTED TO LOCALHOST DB');
});
