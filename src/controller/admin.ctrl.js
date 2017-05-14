let Admin = require('../database/table/Admin');

// 判断是否登录
module.exports.isLogin = (req, res) => {
  if(req.session.admin) return res.json({msg:true, admin: req.session.admin});
  else return res.json({msg:false});
}

// 登录
module.exports.signIn = (req, res) => {
  let number = parseInt(req.body.number);
  let password = req.body.password;
  Admin.getAdminByNumber(number).then((result) => {
    if(!result) {
      res.json({err: '管理员标号不存在'})
    } else {
      if(result.password != password) {
        return res.json({err: '密码错误，请重试'})
      } else {
        req.session.admin = result;
        res.json({admin: result});
      }
    }
  });
}

//退出
module.exports.logOut = (req, res) => {
  if(req.session.admin) delete req.session.admin;
  return json({msg: '退出成功'})
}
