let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 书号，作者，名字，出版社，类别，校区，购入时间
 */
function Book() {
  let name = 'Book';
  let keys = [
    { vaL: 'number', type: 'int', },
    { vaL: 'author', type: 'varchr(200)', },
    { vaL: 'name', type: 'varchr(200)', },
    { vaL: 'publisher', type: 'varchr(200)', },
    { vaL: 'picture', type: 'varchr(200)', },
    { vaL: 'type', type: 'varchr(200)', },
    { vaL: 'reserved', type: 'int', },
    { vaL: 'buy_time', type: 'date', },
    { vaL: 'school', type: 'varchar(200)', },
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
  }

  this.deleteBookByNumber = (number) => {
    let query = `delete from ${name} where number=${number}`
    return new Promise((resolve, rejecr) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res[0]);
      })
    })
  },

  this.updateBookByNumber = (fields) => {
    let query = `update ${name} set `;
    for(let key in fields) query += (key + '=' + fields[key] + ',')
    query = query.substring(0, query.length - 1)
    query += ' where number = ' + fields.number + ';'
    return new Promise((resolve, rejecr) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res[0]);
      })
    })
  }
}

Book.prototype = new BaseTable();
Book.prototype.constructor = Book;

module.exports = new Book();