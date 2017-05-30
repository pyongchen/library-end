let path = require('path')
let formidable = require('formidable')
let fs = require('fs')
let Book = require('../database/table/Book')

module.exports.upload = (req, cb) => {
  let form = new formidable.IncomingForm();
  form.fileDir = path.join(__dirname, '../../static/cover') //图片存储的文件夹
  form.pdfDir = path.join(__dirname, '../../static/pdf') //pdf存储的文件夹
  form.parse(req, (err, fileds, files) => {
    let file = files.file;
    let pdf = files.pdf;
    Book.getOne(fileds.number).then((res)=> {
      console.log(res);
      if(res[0]) cb({err: '图书编号不能重复'});
      else {
        fs.rename(file.path, path.join(form.fileDir, file.name));  //保存图片
        fs.rename(pdf.path, path.join(form.pdfDir, pdf.name));  //保存pdf
        cb(fileds);
      }
    })
  })
};