let path = require('path');
let book = require('../../controller/book.ctrl');
let router = require('express').Router();

module.exports = () => {
  router.get('/books', book.getBooks);
  router.get('/book', book.getOne);
  router.post('/admin/createBook', book.createBook),
  router.post('/admin/updateBook', book.updateBook);
  router.post('/admin/deleteBook', book.deleteBook);
  router.post('/reserve', book.reserve);
  router.post('/giveBack', book.giveBackByNumber);
  router.post('/pdf', book.downloadPDF);
  return router
};



/*

 app.get('/file', (req, res) => {
 //方法1
 // res.download(path.join(__dirname, 'data.txt'))

 //方法2
 res.set({
 'Content-Type': 'application/octet-stream',
 'Content-Disposition': 'attachment; filename=' + 'hehe.xls'
 });
 // fs.readFile(path.join(__dirname, 'data.txt'), (err, result) => {
 //   res.end(result);
 // });
 // res.sendFile(path.join(__dirname, 'data.txt'));
 let buffer = new Buffer('321123');
 res.end(buffer);

 //方法3
 // fs.createReadStream(path.join(__dirname, 'data.txt')).pipe(res);
 });


 */