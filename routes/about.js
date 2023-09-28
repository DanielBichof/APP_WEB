var express = require('express');
var router = express.Router();
const path = require('path');


/* GET users listing. */
router.get('/', function(req, res, next) {
  const filePath = path.join(__dirname, '../views', 'about.html');
  console.log(filePath) ;
  res.sendFile(filePath);

  // res.sendFile('about.html');
  // res.send('respond with a resource');
});

module.exports = router;
