let user= require('../../controller/user.ctrl');
let router = require('express').Router();

module.exports = () => {
  router.get('/user', user.user);
  router.get('/users', user.all);
  return router
};