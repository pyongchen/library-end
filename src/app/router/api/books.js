let book = require('../../controller/book-ctrl');

module.exports = (router) => {
  router.get('/books', book.getAll);
  router.get('/book', book.getOne);
};