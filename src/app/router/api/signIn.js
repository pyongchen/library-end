let signIn = require('../../controller/login.ctrl');

module.exports = function (router) {
  router.post('/signIn', signIn.signIn);
  router.post('/signUp', signIn.signUp);
};