let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 书号，作者，名字，出版社，类别，校区，购入时间
 */
function Book() {
  let name = 'Book';
  let keys = ['number', 'author', 'name', 'publisher','picture', 'type', 'reserved', 'buy_time','school',];
  BaseTable.call(this, name, keys);

  this.getOne = (number) => {
    let query = `select * from ${name} where number = ${number}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })
  },

  /**
   * 获取多本图书
   * 0->空闲的，1->已经预约的，2->所有图书
   */
  this.getBooks = (flag) => {
    let query = `select * from ${name}`
    if(flag != 2) query += ` where reserved = ${flag}`;
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