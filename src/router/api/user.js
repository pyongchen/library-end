let user= require('../../controller/user.ctrl');
let router = require('express').Router();

module.exports = () => {
  router.get('/user', user.user);
  router.get('/reserve', user.reserve);
  router.get('/getProblems', user.getProblems);
  router.get('/submitProblems', user.checkProblems);
  return router
};