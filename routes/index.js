var router = require('express').Router();

router.get('/', function(req, res){
	res.render('index');
});

router.post('/generate', function(req, res, next) {
  
});

module.exports = router;