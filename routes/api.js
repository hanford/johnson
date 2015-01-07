var express = require('express');
var router = express.Router();

router.get('/api/start', function(req, res) {
  return res.json(res.body);
});

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

module.exports = router;
