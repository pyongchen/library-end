let User = require('../database/table/User');

module.exports.user = (req, res) => {
  User.getUserByNumber(req.query.number).then((result) => {
    res.json({user: result});
  })
}