var express = require('express');
var path = require('path');
var generatePassword = require('password-generator');
var bodyParser  = require('body-parser');
var jwt    = require('jsonwebtoken');

var app = express();

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var apiRoutes = express.Router(); 
app.use('/api', apiRoutes);
app.use('/card', apiRoutes);

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {
    if ('hej' != req.body.password) {
      res.json({ success: false, message: 'Authentication failed. Wrong password.' });
    } else {
      var token = jwt.sign({}, 'secret', {});
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });
    }  
  });

apiRoutes.use(function(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/api/passwords', (req, res) => {
  const count = 5;
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )
  res.json(passwords);
  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
