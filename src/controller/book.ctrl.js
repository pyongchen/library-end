let Book = require('../database/table/Book');
let Reserve = require('../database/table/Reserve');
let ImgGroup = require('../database/table/ImgGroup');
let uploader = require('../tools/uploader');
let format = require('../tools/date').format;
let fs = require('fs');
let path = require('path');
let exec = require('child_process').exec

// 获取图书详情，需要与图片组表进行拼表操作，以获取图片
module.exports.getOne = (req, res) => {
  let number = req.query.number;
  Book.getOne(number).then((result) => {
    return res.json(result[0]);
  })
};

// 获取所有图书
module.exports.getBooks = (req, res) => {
  let flag = req.query.flag;
  Book.getBooks(flag).then((result) => {
    return res.json(result);
  })
};

// 创建图书，需要判断图书编号是否已经存在
module.exports.createBook = (req, res) => {
  uploader.upload(req, (fields, urls) => {
    if(fields.err) {
      res.json({err: fields.err})
    } else {
      fields.buy_time = format(fields.buy_time)
      fields.reserved = 0
      let imgGroup = {
        urls: urls,
        book_number: fields.number
      }
      Promise.all([
        Book.insert([fields]),
        ImgGroup.insert([imgGroup])
      ]).then(() => {
        res.json({msg: '添加图书成功'})
      });
    }
  });
}

// 更新图书
module.exports.updateBook = (req, res) => {
  Book.updateBookByNumber(req.body).then(() => {
    return res.json({msg: '更新成功'});
  })
};

// 删除图书,同时删除封面、图片组、pdf
module.exports.deleteBook = (req, res) => {
  exec("rm -rf ../../static/" + req.number);
  exec("rm ../../static/cover/" + req.number + '.*');
  exec("rm ../../static/pdf/" + req.number + '.*');
  Book.deleteBookByNumber(req.body.number).then(() => {
    return res.json({msg: '删除成功'});
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

//根据图书编号下载pdf
module.exports.downloadPDF = (req, res) => {
  let number = req.body.number
  res.download(path.join(__dirname, '../../static/pdf', number + '.pdf'))
};

