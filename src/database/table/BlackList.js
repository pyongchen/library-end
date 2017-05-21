let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 黑名单，读者编号
 */
function BlackList() {
  let name = 'BlackList';
  let keys = [
    { val: 'number', type: 'int', },
  ]
  BaseTable.call(this, name, keys);

  this.getAll = () => {
    let query = `select * from ${name}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })
  };

  // 根据读者编号查看是否在黑名单中
  this.inBlackList = (number) => {
    let query = `select * from ${name} where number = ${number};`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res[0]);
      })
    })
  }

  // 根据读者编号解除黑名单
  this.deleteByNumber = (number) => {
    let query = `delete from ${name} where number = ${number};`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })   
  }
}

BlackList.prototype = new BaseTable();
BlackList.prototype.constructor = BlackList;

module.exports = new BlackList();

