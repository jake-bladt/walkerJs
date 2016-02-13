var express = require('express');
var jade = require('jade');

var app = express();
app.set('port', (process.env.PORT || 8888));
app.set('view engine', 'jade');


app.listen(app.get('port'), function() {
  console.log('Walker running on port', app.get('port'));
});
