let path = require('path');
let book = require('../../controller/book.ctrl');
let router = require('express').Router();

module.exports = () => {
  router.get('/books', book.getBooks);
  router.get('/book', book.getOne);
  router.post('/file', (req, res) => {
    console.log(req.body);
    res.download(path.join(__dirname, '../', 'data.txt'))
  })
  return router
};
