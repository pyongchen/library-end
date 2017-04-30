let express = require('express');
let router = express.Router();

let loginRouter = require('./api/signIn');
let bookRouter = require('./api/books');

module.exports = (app) => {
  // app.get('/', (req, res) => {
  //   res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  //   res.render('index')
  // });
  app.use('/api', router);
};

loginRouter(router);
bookRouter(router);