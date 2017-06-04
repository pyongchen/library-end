let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 *  图书预约表，读者编号，借阅时间，是否归还
 */
function ImgGroup() {
  let name = 'ImgGroup';
  let keys = [
    { val: 'book_number', type: 'int', },
    { val: 'urls', type: 'varchar(1000)'},
  ]
  BaseTable.call(this, name, keys);

  this.getImgsByBookNumber = (number)=> {
    let query = `select * from ${name} where book_number = ${number}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res[0]);
      })
    })
  }
}

ImgGroup.prototype = new BaseTable();
ImgGroup.prototype.constructor = ImgGroup;

module.exports = new ImgGroup();
