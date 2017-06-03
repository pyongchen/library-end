let Book = require('../database/table/Book');
let Reserve = require('../database/table/Reserve');
let format = require('../tools/date').format;

module.exports.getOne = (req, res) => {
  let number = req.query.number;
  Book.getOne(number).then((result) => {
    return res.json(result[0]);
  })
};

module.exports.getBooks = (req, res) => {
  let flag = req.query.flag;
  Book.getBooks(flag).then((result) => {
    return res.json(result);
  })
};

module.exports.reserve = (req, res) => {
  console.log(req.session.user);
  let record = {
    reserve_time: format(new Date()),
    book_number: req.body.bookNumber,
    user_number: req.session.user.number,
    isReturn: 0
  }
  console.log(record);
  Promise.all([
    Reserve.insert([record]),             //预约表加多一条记录
    Book.changeReserve(req.body.bookNumber, 1)    //修改图书reserved字段
  ]).then(() => {
    return res.json({msg: '借阅成功！'})
  });
};

// 根据图书编号归还图书
module.exports.giveBackByNumber = (req, res) => {
  Promise.all([
    Reserve.getBackByNumber(req.body.number),
    Book.changeReserve(req.body.number, 0)
  ]).then(() => {
    return res.json({msg: '归还成功！'})
  })
};