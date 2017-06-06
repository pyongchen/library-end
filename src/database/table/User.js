let BaseTable = require('./baseTable');
let conn = require('../conn');

/**
 * 读者编号，密码，姓名，学院，性别，邮箱
 */
function User() {
  let name = 'User';
  let keys = [
    { val: 'number', type: 'int', },
    { val: 'password', type: 'varchr(200)', },
    { val: 'name', type: 'varchr(200)', },
    { val: 'school', type: 'varchr(200)', },
    { val: 'sex', type: 'varchr(200)', },
    { val: 'mail', type: 'varchr(200)', },
  ]
  BaseTable.call(this, name, keys);

  // 0表示正常用户，1表示黑名单用户
  this.getAll = (flag) => {
    let query = `select * from ${name} where number ${flag == 0 ? 'not': ''} in 
    (select number from BlackList)`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res);
      })
    })
  };
  //select * from user uu join BlackList bl on uu.number = bl.number where number = 100;
  // 根据读者编号获取读者，需和黑名单进行拼表操作
  this.getUserByNumber = (number) => {
    let query = `select * from ${name} uu join BlackList bl on uu.number = bl.number where uu.number = ${number}`;
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else resolve(res[0]);
      })
    })
  };

  this.checkUserByNumber = (number) => {
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
  };

  this.update = (fields) => {
    let query = `update ${name} set `;
    for(let key in fields) query += (key + "='" + fields[key] + "',")
    query = query.substring(0, query.length - 1);
    query += ' where number = ' + fields.number + ';';
    console.log(query);
    return new Promise((resolve, reject) => {
      conn.query(query, (err, res) => {
        if(err) reject(err);
        else this.getUserByNumber(fields.number).then((user) => {
          resolve(user)
        })
      })
    })
  }
}

User.prototype = new BaseTable();
User.prototype.constructor = User;

module.exports = new User();

