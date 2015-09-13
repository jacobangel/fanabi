var express = require('express');
var router = express.Router();

/* GET game listing. */
router.get('/', function(req, res, next) {
  // the data base is here: req.db 
  res.send('respond with a resource');
});

module.exports = router;
