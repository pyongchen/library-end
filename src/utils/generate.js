let User = require('../database/table/User');
let Admin = require('../database/table/Admin');
let Book = require('../database/table/Book');

let users = [
  {number: 100, password: 100100, name: '张三', college: '资讯管理学院', sex: '男', mail: 'abc.com'},
  {number: 101, password: 101101, name: '李四', college: '数据科学与计算机学院', sex: '女', mail: 'cba.com'},
];

let admins = [
  {number: 666, password: "admin", name: '管大妈', sex: '女', mail: "734162711@qq.com"}
]

let data = [
    { "number": "111", "author": "哈拉鱼1", "name": "可爱学1", "publisher": "机械工业出版社", 
      "picture": "halayu1.jpg", "type": "类别1", "reserved": "1", "buy_time": "2017-04-10","school": "东校区"
    },
    { "number": "222", "author": "哈拉鱼2", "name": "可爱学2", "publisher": "机械工业出版社",
      "picture": "halayu2.jpg", "type": "类别2", "reserved": "0", "buy_time": "2017-04-10", "school": "南校区"
    },
    { "number": "333", "author": "哈拉鱼3", "name": "可爱学3", "publisher": "机械工业出版社", 
      "picture": "halayu3.jpg", "type": "类别3", "reserved": "1", "buy_time": "2017-04-10", "school": "东校区"
    },
    { "number": "444", "author": "哈拉鱼4", "name": "可爱学4", "publisher": "机械工业出版社",
      "picture": "halayu4.jpg", "type": "类别4", "reserved": "0", "buy_time": "2017-04-10", "school": "北校区"
    },
    { "number": "555", "author": "哈拉鱼5",  "name": "可爱学5", "publisher": "机械工业出版社",
      "picture": "halayu5.jpg", "type": "类别5", "reserved": "1", "buy_time": "2017-04-10", "school": "东校区"
    }
  ]
;

// User.create().then(() => {
//   User.insert(users).then(() => {
//     console.log('插入user成功')
//   }).catch((err) => {
//     console.log('插入user失败', err)
//   })
// });

// Admin.create().then(() => {
//   Admin.insert(admins).then(() => {
//     console.log('插入admin成功')
//   }).catch((err) => {
//     console.log("插入admin失败",err)
//   })
// });

Book.create().then(() => {
  Book.insert((data)).then(() => {
    console.log('插入Book成功')
  }).catch((err) => {
    console.log("插入Book失败",err)
  })
})
