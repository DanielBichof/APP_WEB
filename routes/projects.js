var express = require('express');
var router = express.Router();
const path = require('path');
const setPageTitle = require('./setPageTitle'); 
var PAGE_TITLE = "Daniel Bichof"

var titlePagesList = {
    "index": "",
    "about": "about",
    "projects": "projects"
}

router.use(setPageTitle('Título Padrão'));

/* GET users listing. */
router.get('/', function(req, res, next) {
  const filePath = path.join(__dirname, '../views', 'projects.html');
  res.sendFile(filePath);

  // res.sendFile('about.html');
  // res.send('respond with a resource');
});

module.exports = router;
