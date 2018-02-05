var express = require('express');
var path = require('path');
var bodyParser  = require('body-parser');
var jwt    = require('jsonwebtoken');

var app = express();

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var apiRoutes = express.Router(); 
// app.use('/card', apiRoutes);
app.set('superSecret', '9mmnJoZquWVcXxdBGQg6U6s9MdRX5mD6');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {
    if ('password' != req.body.password) {
      res.json({ success: false, message: 'Authentication failed. Wrong password.' });
    } else {
      var token = jwt.sign({}, app.get('superSecret'), {
        expiresIn : 60*60*24
      });
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });
    }  
  });

apiRoutes.use(function(req, res, next) {
    console.log(req.body);
    console.log(req.query);
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          req.decoded = decoded;    
          console.log("decoded");
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

apiRoutes.get('/card', function(req, res) {
  return res.json({ success: true, message: 'Card access granted!' }); 
}); 

app.use('/api', apiRoutes);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Card listening on ${port}`);
