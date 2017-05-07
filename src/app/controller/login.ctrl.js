let User = require('../database/table/User');

module.exports.signIn = (req, res) => {
  let number = parseInt(req.body.number);
  console.log(number);
  User.getUserByNumber(number).then((result) => {
    if(!result) {
      res.json({err: '用户名不存在'})
    } else {
      res.json({msg: '登录成功'})
      //保存记录
    }
  });
};

module.exports.signUp = (req, res) => {
  let user = {
    number: req.body.number,
    password: req.body.password,
    name: 'XXX',
    college: 'XXX',
    sex: '男',
    mail: 'XXXXXX.com'
  };
  User.insert([user]).then( ()=> {
    console.log('插入读者:' + req.body.number + '成功');
    return res.end();
  }).catch((err) => {
    console.log(err);
    return res.end();
  });
};
