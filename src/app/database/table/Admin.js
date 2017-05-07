let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 管理员编号，密码，姓名，性别，邮箱
 */
function Admin() {
  let name = 'Admin';
  let keys = ['number', 'password', 'name', 'college', 'sex', 'mail'];
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

Admin.prototype = new BaseTable();
Admin.prototype.constructor = Admin;

module.exports = new Admin();