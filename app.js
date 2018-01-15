let express     = require('express'),
    path        = require('path'),
    favicon     = require('serve-favicon'),
    logger      = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    db          = require('./app/models/db'),
    cors        = require('cors')
    nmap        = require('libnmap')
    jwt         = require('jsonwebtoken')
    config      = require('./config')


// NMAP VARS
let options = {
  // TO CHANGE
  range:[
    '192.168.43.0-255'
  ]
}

// ROUTE REGISTERING
let usersRoute = require('./routes/users')
let indexRoute = require('./routes/index');
let speechRoute = require('./routes/speech');
let connectionRoute = require('./routes/connection')

// APP INIT
let app = express();
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


// ROUTES USED
app.use('/users', usersRoute);

// AUTHENTICATION MIDDLEWARE
app.use(function(req, res, next) {
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, config.secret, function(err, decoded) {			
			if (err) {
				res.status(400).json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				req.decoded = decoded;	
				next();
			}
		});
	} else {
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
	}
});

app.use('/', indexRoute);
app.use('/speech', speechRoute);
app.use('/connection', connectionRoute);

// CATCH ERROR 
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ERROR HANDLER
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // RENDER ERROR PAGE
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
