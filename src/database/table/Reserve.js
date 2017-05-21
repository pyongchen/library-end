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
    { val: 'isReturn', type: 'int', }
  ]
  BaseTable.call(this, name, keys);

  this.getAdminByNumber = function (number) {
    let query = `select * from ${this.name} where number = ${number}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res[0]);
      })
    })
  }
}

Reserve.prototype = new BaseTable();
Reserve.prototype.constructor = Reserve;

module.exports = new Reserve();
