var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 8888));


app.listen(app.get('port'), function() {
  console.log('Walker running on port', app.get('port'));
});
