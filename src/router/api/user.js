let user= require('../../controller/user.ctrl');
let router = require('express').Router();

module.exports = () => {
  router.get('/user', user.user);
  router.post('/update', user.update);
  router.get('/reserve', user.reserve);
  router.get('/getReserveHistory', user.getReserveHistory);
  router.get('/getProblems', user.getProblems);
  router.get('/submitProblems', user.checkProblems);
  return router
};