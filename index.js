var path = require('path');
var express = require('express');
var app = express();

var dir = path.join(__dirname, 'public');

var fs = require('fs'),
  http = require('http'),
  https = require('https');
var HTTP_PORT = 80
var HTTPS_PORT = 443

app.use(express.static(dir));

app.get('*', function (req, res, next) {
  if (req.secure) {
    return next();
  };
  // res.redirect('https://'+req.hostname+':'+HTTPS_PORT+req.originalUrl);
  res.redirect('https://' + req.hostname + req.originalUrl);
});

//HTTPS

// var secureServer = https.createServer({
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
//   }, app).listen(HTTPS_PORT);

// var insecureServer = http.createServer(app).listen(HTTP_PORT);
//END



app.listen(80, function () {
  console.log('Listening on http://localhost:443/');
});

/* https.createServer(options, function (req, res) {
    console.log('Listening on http://localhost:443/');
}).listen(443);*/