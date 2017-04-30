module.exports.signIn = (req, res) => {
  console.log(req.body.username);
  return res.end('signIn');
};

module.exports.signUp = (req, res) => {
  console.log(req.body.username);
  return res.end('signUp');
};