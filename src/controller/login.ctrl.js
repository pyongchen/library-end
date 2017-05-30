let User = require('../database/table/User');

// 判断是否登录
module.exports.isLogin = (req, res) => {
  if(req.session.user) return res.json({msg:true, user: req.session.user});
  else return res.json({msg:false});
}

// 登录
module.exports.signIn = (req, res) => {
  let number = parseInt(req.body.number);
  let password = parseInt(req.body.password);
  if(!Number.isInteger(number)) return res.json({err: '编号必须为数字'})
  User.getUserByNumber(number).then((result) => {
    if(!result) {
      res.json({err: '读者标号不存在'})
    } else {
      if(result.password != password) {
        return res.json({err: '密码错误，请重试'})
      } else {
        req.session.user = result;
        res.json({user: result});
      }
    }
  });
};

// 注册
module.exports.signUp = (req, res) => {
  let user = {
    number: req.body.number,
    password: req.body.password,
    name: '读者',
    school: '数据科学与计算机学院',
    sex: '男',
    mail: '123123123.com'
  };
  User.getUserByNumber(user.number).then((result) => {
    if(!result) {
      User.insert([user]).then( ()=> {
        console.log('插入读者:' + req.body.number + '成功');
        return res.json({msg: '注册成功！'});
      });
    } else {
      return res.json({err: '编号已被注册，请更换！'})
    }
  })
};

// 退出
module.exports.logOut = (req, res) => {
  if(req.session.user) delete req.session.user;
  return res.json({msg: '退出成功'})
}
