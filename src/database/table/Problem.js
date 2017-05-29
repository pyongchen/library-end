let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 问题，题目编号，标题，选项，答案
 */
function Problem() {
  let name = 'Problem';
  let keys = [
    { val: 'number', type: 'int', },
    { val: 'title', type: 'varchar(200)', },
    { val: 'selects', type: 'varchar(1000)', },
    { val: 'answer', type: 'int', }
  ]
  BaseTable.call(this, name, keys);

  // 获取所有问题
  this.getAll = (number) => {
    let query = `select * from ${name}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })
  };

}

Problem.prototype = new BaseTable();
Problem.prototype.constructor = Problem;

module.exports = new Problem();

