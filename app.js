var express = require('express');
var jade = require('jade');
var path = require('path');

var AuthenticationStrategy = require('passport-google').strategy;

var app = express();
app.set('port', (process.env.PORT || 8888));
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(req, res) {
  res.render("home", {
    pageTitle: "Walker"
  });
});

app.listen(app.get('port'), function() {
  console.log('Walker running on port', app.get('port'));
});
