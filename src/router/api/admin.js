let admin = require('../../controller/admin.ctrl');
let router = require('express').Router();

module.exports = () => {
  
  router.post('/signIn', admin.signIn);
  router.get('/isLogin', admin.isLogin);
  return router
};