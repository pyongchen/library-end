let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let session = require('express-session');
let cors = require('cors');
let ejs = require('ejs');

let api = require('../router/api.config.router');

let app = express();

// //设置视图和静态文件
// app.set('views', path.join(__dirname, '../views'));
// app.engine('html', ejs.__express);
// app.set('view engine', 'html');

//app.use(express.static(path.join(__dirname,'../public'), {maxAge:0}));

//设置中间件
app.use(cors());  //跨域

app.use(bodyParser.json());   //解析json格式
app.use(bodyParser.urlencoded({ extended: false }));  //解析urlencoded字符

app.use(cookieParser());  //解析cookie

app.use(session({     //设置session
  secret: 'library',
  cookie: {
    maxAge: 1000* 60* 30    //过期时间:30分钟
  }
}));

//设置应用路由
api(app);


module.exports = app;