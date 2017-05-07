let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 书号，作者，名字，出版社，类别，校区，购入时间
 */
function Book() {
  let name = 'Book';
  let keys = ['number', 'author', 'name', 'publisher', 'type', 'school', 'buy_time'];
  BaseTable.call(this, name, keys);

  this.get = function () {
    let query = `select * from ${this.name}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })
  }
}

Book.prototype = new BaseTable();
Book.prototype.constructor = Book;

module.exports = new Book();