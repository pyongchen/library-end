let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 管理员编号，密码，姓名，性别，邮箱
 */
function Admin() {
  let name = 'Admin';
  let keys = [
    { vaL: 'number', type: 'int', },
    { vaL: 'password', type: 'varchr(200)', },
    { vaL: 'name', type: 'varchr(200)', },
    { vaL: 'sex', type: 'varchr(200)', },
    { vaL: 'mail', type: 'varchr(200)', },
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

Admin.prototype = new BaseTable();
Admin.prototype.constructor = Admin;

module.exports = new Admin();
