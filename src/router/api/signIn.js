let signIn = require('../../controller/login.ctrl');
let router = require('express').Router();

module.exports = () => {
  router.get('/isLogin', signIn.isLogin);
  router.post('/logout', signIn.logOut);
  router.post('/signIn', signIn.signIn);
  router.post('/signUp', signIn.signUp);
  return router
};