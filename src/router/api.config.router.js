let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require('path');

let loginRouter = require('./api/signIn')();
let bookRouter = require('./api/books')();
let userRouter = require('./api/user')();
let adminRouter = require('./api/admin')();

module.exports = (app) => {

  //挂载用户路由
  app.use('/api', loginRouter)
  app.use('/api', userRouter);
  app.use('/api', bookRouter);

  //挂在管理员路由
  app.use('/api/admin', adminRouter);

  app.get('/', (req, res) => {
    res.render('../views/index.html');
  })
};