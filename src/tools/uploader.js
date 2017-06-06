let path = require('path')
let formidable = require('formidable')
let fs = require('fs')
let Book = require('../database/table/Book')

module.exports.upload = (req, cb) => {
  let form = new formidable.IncomingForm();
  form.fileDir = path.join(__dirname, '../../src/resource/cover') //图片存储的文件夹
  form.pdfDir = path.join(__dirname, '../../src/resource/pdf') //pdf存储的文件夹
  form.parse(req, (err, fileds, files) => {
    Book.getOne(fileds.number).then((res) => {
      if (res[0]) return cb({err: '图书编号不能重复'});
      let imgsDir = path.join(__dirname, '../resource/' + fileds.number);
      let urls = '';
      fs.mkdir(imgsDir);
      form.imgsDir = imgsDir
      for (let key in files) {
        let file = files[key]
        if(key == 'file') {
          fileds.picture = fileds.number + '.' + file.name.split('.')[1];
          fs.rename(file.path, path.join(form.fileDir, fileds.number + '.' + file.name.split('.')[1]));   //封面
        } else if (key == 'pdf') {
          fs.rename(file.path, path.join(form.pdfDir, fileds.number + '.pdf'));   //保存pdf
        } else {
          let name = fileds.number + new Date().getTime() + '.' + file.name.split('.')[1];
          fs.rename(file.path, path.join(form.imgsDir, name))  //保存图片组
          urls += (name + '|')
        }
      }
      cb(fileds, urls);
    })
  })
};