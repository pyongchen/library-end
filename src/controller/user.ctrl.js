let User = require('../database/table/User');
let Reserve = require('../database/table/Reserve')
let Problem = require('../database/table/Problem')
let BlackList = require('../database/table/BlackList')
let format = require('../tools/date').format;


// 根据读者编号返回某个读者信息
module.exports.user = (req, res) => {
  User.getUserByNumber(req.query.number).then((result) => {
    res.json({user: result});
  })
};

// 更新个人信息
module.exports.update = (req, res) => {
  User.update(req.body).then((user) => {
    req.session.user = user;
    res.json({msg: '更新成功'});
  })
};

// 借阅图书，提供读者编号和图书编号
module.exports.reserve = (req, res) => {
  let record = {
    user_number: req.query.userNumber,
    book_number: req.query.bookNumber,
    reserve_time: format(new Date()),
    isReturn: 0
  }
  Reserve.insert([record]).then(() => {
    res.json({msg: '借阅成功'})
  })
}

// 根据读者编号返回某个读者借阅的所有图书
module.exports.getReserve = (req, res) => {
  Reserve.getReserveByUserNumber(req.query.number).then((res) => {
    return res.json(res);
  })
}

// 获取所有问题, 先要检查用户是否在黑名单中
module.exports.getProblems = (req, res) => {
  // BlackList.inBlackList(req.query.number).then((result) => {
  //   if(result) {  //返回列表不为空，说明在，获取所有问题并返回
  //     res.json(result);
  //   } else {  //不在，直接返回不在信息
  //     return res.json({msg: true})
  //   }
  // })
  Problem.getAll(req.query.number).then((result) => {
    result.forEach((item) => {    //对问题的选项进行分割
      item.selects = item.selects.split(',')
    })
    return res.json(result);
  })
}

module.exports.checkProblems = (req, res) => {
  console.log(req.query);
  let answers = req.query.result.split('-'), flag = true;
  Problem.getAll().then((result) => {
    if(answers.length != result.length) return res.json({msg: false})
    for(let i = 0; i < result.length; i++) {
      if(result[i].answer != parseInt(answers[i])+1) {
        flag = false;
        break;
      }
    }
    return res.json({msg: flag})                                                                                                                      
  })
}