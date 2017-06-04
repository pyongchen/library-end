let admin = require('../../controller/admin.ctrl');
let router = require('express').Router();

module.exports = () => {
  router.post('/logout', admin.logOut);
  router.post('/signIn', admin.signIn);
  router.get('/isLogin', admin.isLogin);
  router.get('/users', admin.users);
  router.get('/deleteUser', admin.deleteUser);
  router.post('/addToBlackList', admin.addToBlackList);
  router.post('/removeFromBlackList', admin.removeFromBlackList);
  return router
};