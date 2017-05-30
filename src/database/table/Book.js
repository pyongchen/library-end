let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 书号，作者，名字，出版社，类别，校区，购入时间
 */
function Book() {
  let name = 'Book';
  let keys = [
    { val: 'number', type: 'int', },
    { val: 'author', type: 'varchr(200)', },
    { val: 'name', type: 'varchr(200)', },
    { val: 'publisher', type: 'varchr(200)', },
    { val: 'picture', type: 'varchr(200)', },
    { val: 'type', type: 'varchr(200)', },
    { val: 'reserved', type: 'int', },
    { val: 'buy_time', type: 'date', },
    { val: 'school', type: 'varchar(200)', },
  ]
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
  };

  this.deleteBookByNumber = (number) => {
    let query = `delete from ${name} where number=${number}`
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res[0]);
      })
    })
  };

  this.updateBookByNumber = (fields) => {
    let query = `update ${name} set `;
    for(let key in fields) query += (key + "='" + fields[key] + "',")
    query = query.substring(0, query.length - 1)
    query += ' where number = ' + fields.number + ';'
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res[0]);
      })
    })
  };

  this.addToBlackList = (number) => {

  }
}

Book.prototype = new BaseTable();
Book.prototype.constructor = Book;

module.exports = new Book();