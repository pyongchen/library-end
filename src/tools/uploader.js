let path = require('path')
let formidable = require('formidable')
let fs = require('fs')
let Book = require('../database/table/Book')

module.exports.upload = (req, cb) => {
  let form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname, '../../static') //文件放的文件夹
  form.parse(req, (err, fileds, files) => {
    let file = files.file
    Book.getOne(fileds.number).then((res)=> {
      console.log(res);
      if(res[0]) cb({err: '图书编号不能重复'})
      else {
        fs.rename(file.path, path.join(form.uploadDir, file.name))  //保存图片
        cb(fileds);
      }
    })
  })
}