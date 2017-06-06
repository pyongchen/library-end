let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 *  图书预约表，读者编号，借阅时间，是否归还
 */
function Reserve() {
  let name = 'Reserve';
  let keys = [
    { val: 'user_number', type: 'int', },
    { val: 'book_number', type: 'int', },
    { val: 'reserve_time', type: 'date', },
    { val: 'isReturn', type: 'int'}
  ]
  BaseTable.call(this, name, keys);

  this.getAdminByNumber = (number)=> {
    let query = `select * from ${name} where number = ${number}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res[0]);
      })
    })
  }

  this.getReserveByUserNumber = (number) => {
    let query = `select DATE_FORMAT(re.reserve_time, '%Y-%m-%d') as reserve_time, re.isReturn, re.book_number, b.name
    from ${name} re join Book b on re.book_number = b.number and re.user_number = ${number} 
    order by reserve_time desc`;
    return new  Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })
  };

  this.getBackByNumber = (number) => {
    let query = `update ${name} set isReturn = 1 where book_number = ${number}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })
  }
}

Reserve.prototype = new BaseTable();
Reserve.prototype.constructor = Reserve;

module.exports = new Reserve();
