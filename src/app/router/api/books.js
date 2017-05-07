let path = require('path');
let book = require('../../controller/book-ctrl');

module.exports = (router) => {
  router.get('/books', book.getAll);
  router.get('/book', book.getOne);
  router.post('/file', (req, res) => {
    console.log(req.body);
    res.download(path.join(__dirname, '../', 'data.txt'))
  })
};