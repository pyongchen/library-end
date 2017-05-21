let User = require('../database/table/User');
let Admin = require('../database/table/Admin');
let Book = require('../database/table/Book');
let Reserve = require('../database/table/Reserve');
let Problem = require('../database/table/Problem');

let users = [
  {number: 100, password: 100100, name: '张三', college: '资讯管理学院', sex: '男', mail: 'abc.com'},
  {number: 101, password: 101101, name: '李四', college: '数据科学与计算机学院', sex: '女', mail: 'cba.com'},
];

let admins = [
  {number: 666, password: "admin", name: '管大妈', sex: '女', mail: "734162711@qq.com"}
]

let data = [
    { "number": "111", "author": "哈拉鱼1", "name": "可爱学1", "publisher": "机械工业出版社", "school": "东校区",
      "picture": "halayu1.jpg", "type": "类别1", "reserved": "1", "buy_time": "2017-04-10",
    },
    // { "number": "222", "author": "哈拉鱼2", "name": "可爱学2", "publisher": "机械工业出版社",
    //   "picture": "halayu2.jpg", "type": "类别2", "reserved": "0", "buy_time": "2017-04-10", "school": "南校区"
    // },
    // { "number": "333", "author": "哈拉鱼3", "name": "可爱学3", "publisher": "机械工业出版社", 
    //   "picture": "halayu3.jpg", "type": "类别3", "reserved": "1", "buy_time": "2017-04-10", "school": "东校区"
    // },
    // { "number": "444", "author": "哈拉鱼4", "name": "可爱学4", "publisher": "机械工业出版社",
    //   "picture": "halayu4.jpg", "type": "类别4", "reserved": "0", "buy_time": "2017-04-10", "school": "北校区"
    // },
    // { "number": "555", "author": "哈拉鱼5",  "name": "可爱学5", "publisher": "机械工业出版社",
    //   "picture": "halayu5.jpg", "type": "类别5", "reserved": "1", "buy_time": "2017-04-10", "school": "东校区"
    // }
  ]
;

let problems = [
  {title: '以下哪项不是中大校训', number: 1, selects: '博学,审问,慎思,黄赌毒', answer: 1},
  {title: '以下哪项不是中大校训', number: 2, selects: '博学,审问,慎思,黄赌毒', answer: 2},
  {title: '以下哪项不是中大校训', number: 3, selects: '博学,审问,慎思,黄赌毒', answer: 1},
  {title: '以下哪项不是中大校训', number: 4, selects: '博学,审问,慎思,黄赌毒', answer: 4},
  {title: '以下哪项不是中大校训', number: 5, selects: '博学,审问,慎思,黄赌毒', answer: 3},
  {title: '以下哪项不是中大校训', number: 6, selects: '博学,审问,慎思,黄赌毒', answer: 2},
  {title: '以下哪项不是中大校训', number: 7, selects: '博学,审问,慎思,黄赌毒', answer: 2},
  {title: '以下哪项不是中大校训', number: 8, selects: '博学,审问,慎思,黄赌毒', answer: 3},
  {title: '以下哪项不是中大校训', number: 9, selects: '博学,审问,慎思,黄赌毒', answer: 2},
  {title: '以下哪项不是中大校训', number: 10, selects: '博学,审问,慎思,黄赌毒', answer: 2},
  {title: '以下哪项不是中大校训', number: 11, selects: '博学,审问,慎思,黄赌毒', answer: 1},
  {title: '以下哪项不是中大校训', number: 12, selects: '博学,审问,慎思,黄赌毒', answer: 1},
  {title: '以下哪项不是中大校训', number: 13, selects: '博学,审问,慎思,黄赌毒', answer: 4},
  {title: '以下哪项不是中大校训', number: 14, selects: '博学,审问,慎思,黄赌毒', answer: 3},
  {title: '以下哪项不是中大校训', number: 15, selects: '博学,审问,慎思,黄赌毒', answer: 3},
  {title: '以下哪项不是中大校训', number: 16, selects: '博学,审问,慎思,黄赌毒', answer: 1},
  {title: '以下哪项不是中大校训', number: 17, selects: '博学,审问,慎思,黄赌毒', answer: 3},
  {title: '以下哪项不是中大校训', number: 18, selects: '博学,审问,慎思,黄赌毒', answer: 4},
  {title: '以下哪项不是中大校训', number: 19, selects: '博学,审问,慎思,黄赌毒', answer: 1},
  {title: '以下哪项不是中大校训', number: 20, selects: '博学,审问,慎思,黄赌毒', answer: 4},
]

// let reserves = [
//   { user_number: 100, book_number: 111, reserve_time: '2017-02-20', isReturn: 0},
//   { user_number: 100, book_number: 112, reserve_time: '2017-03-10', isReturn: 0},
//   { user_number: 100, book_number: 113, reserve_time: '2017-03-24', isReturn: 0},
//   { user_number: 100, book_number: 114, reserve_time: '2017-04-09', isReturn: 0},
// ]

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

// Book.create().then(() => {
//   Book.insert((data)).then(() => {
//     console.log('插入Book成功')
//   }).catch((err) => {
//     console.log("插入Book失败",err)
//   })
// })

// Reserve.create().then(() => {
//   Reserve.insert(reserves).then(() => {
//     console.log('插入Book成功')
//   }).catch((err) => {
//     console.log("插入Book失败",err)
//   })
// })

Problem.create().then(() => {
  Problem.insert(problems).then(() => {
    console.log('插入Book成功')
  }).catch((err) => {
    console.log("插入Book失败",err)
  })
})
