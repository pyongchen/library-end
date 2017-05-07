let User = require('../database/table/User');
let Admin = require('../database/table/Admin');
let Book = require('../database/table/Book');

let users = [
  {number: 100, password: 100100, name: '张三', college: '资讯管理学院', sex: '男', mail: 'abc.com'},
  {number: 101, password: 101101, name: '李四', college: '数据科学与计算机学院', sex: '女', mail: 'cba.com'},
];

User.create().then(() => {
  User.insert(users).then(() => {
    console.log('插入homeMiddle成功');
  }).catch((err) => {
    console.log('插入homeMiddle失败', err)
  })
});
// Admin.create();
// Book.create();