var express = require('express');
var request = require('request');
var router = express.Router();

router.post('/api/geturl', function(req, res) {

  var data = {};

  request(req.body.url, function (error, response, body) {

    data = {
      "url": res.data,
      "html": body
    };

    return res.json(data);
  });
 
});

// router.get('/load', function(req, res) {
//   request(req.param('url'))
//     .pipe(res);
// });

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

module.exports = router;
