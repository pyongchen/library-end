let Book = require('../database/table/Book');

module.exports.getOne = (req, res) => {
  let number = req.query.number;
  console.log(number);
  Book.getOne(number).then((result) => {
    return res.json(result[0]);
  })
};

module.exports.getBooks = (req, res) => {
  let flag = req.query.flag;
  Book.getBooks(flag).then((result) => {
    return res.json(result);
  })
};
