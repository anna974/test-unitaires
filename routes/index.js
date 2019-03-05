var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/:a/:b', function(req, res, next) {
  var a = req.params.a;
  var b = req.params.b;
  var result = compare (a,b);
    res.render('index', { title: result });
})

compare = function(a,b) {
  return a > b;
}



module.exports = router;
