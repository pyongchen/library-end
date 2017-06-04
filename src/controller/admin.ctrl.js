let Admin = require('../database/table/Admin');
let User = require('../database/table/User');
let Book = require('../database/table/Book');
let BlackList = require('../database/table/BlackList');

// 判断是否登录
module.exports.isLogin = (req, res) => {
  if(req.session.admin) return res.json({msg:true, admin: req.session.admin});
  else return res.json({msg:false});
}

// 登录
module.exports.signIn = (req, res) => {
  let number = parseInt(req.body.number);
  let password = req.body.password;
  if(!Number.isInteger(number)) return res.json({err: '编号必须为数字'})
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
  return res.json({msg: '退出成功'})
}

//获取所有正常用户或者黑名单用户
module.exports.users = (req, res) => {
  User.getAll(req.query.flag).then((result) => {
    return res.json(result)
  })
}

//根据读者编号删除读者
module.exports.deleteUser = (req, res) => {
  let number = req.query.number;
  User.deleteUser(number).then(() => {
    return res.json({msg: true});
  })
};

// 拉入黑名单
module.exports.addToBlackList = (req, res) => {
  BlackList.insert([req.body]).then(() => {
    return res.json({msg: '添加成功'})
  })
};

module.exports.removeFromBlackList = (req, res) => {
  BlackList.removeByNumber(req.body.number).then(() => {
    return res.json({msg: '解除黑名单成功！'});
  })
};