let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 读者编号，密码，姓名，学院，性别，邮箱
 */
function User() {
  let name = 'User';
  let keys = ['number', 'password', 'name', 'college', 'sex', 'mail'];
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

  this.getUserByNumber = (number) => {
    let query = `select * from ${name} where number = ${number}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res[0]);
      })
    })
  };

  this.deleteUser = (number) => {
    let query = `delete from user where number = ${number}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res[0]);
      })
    })
  }
}

User.prototype = new BaseTable();
User.prototype.constructor = User;

module.exports = new User();

