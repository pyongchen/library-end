let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let favicon = require('serve-favicon');
let session = require('express-session');
var methodOverride = require('method-override');
let cors = require('cors');
let ejs = require('ejs');

let api = require('../router/api.config.router');

let app = express();

// //设置视图和静态文件
app.set('views', path.join(__dirname, '../views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// app.use('/static', express.static(path.join(__dirname,'../../static')));
app.use('/static', express.static(path.join(__dirname,'../static')));
app.use('/resource', express.static(path.join(__dirname,'../resource')));

//设置中间件
// app.use(cors());  //跨域
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", true);
  next();
})

app.use(bodyParser.json());   //解析json格式
app.use(bodyParser.urlencoded({ extended: false }));  //解析urlencoded字符

app.use(cookieParser());  //解析cookie
app.use(bodyParser.json());
app.use(methodOverride());

app.use(session({     //设置session
  name: 'library',
  secret: 'library',
  saveUninitialized: true,
  resave: true,
  cookie: {
    maxAge: 1000* 60* 60 * 2   //过期时间:2小时
  }
}));

//设置应用路由
api(app);

module.exports = app;