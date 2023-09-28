// setPageTitle.js
function setPageTitle(title) {
    return function (req, res, next) {
      res.locals.title = title;
      next();
    };
  }
  
  module.exports = setPageTitle;