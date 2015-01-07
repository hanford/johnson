exports.api = require('./api');

exports.index = function(req, res) {
  console.log('index')
  res.render('index.html');
};
