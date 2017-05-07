let sendData = require('../utils/utils').sendData;

let data = [
    {
      "id": "1001010",
      "num": "222",
      "author": "哈拉鱼1",
      "name": "可爱学",
      "publisher": "机械工业出版社",
      "picture": "halayu1.jpg",
      "type": "类别1",
      "reserved": true,
      "buy_time": "2017-04-10",
      "school": "东校区"
    },
    {
      "id": "1001011",
      "num": "222",
      "author": "哈拉鱼2",
      "name": "可爱学",
      "publisher": "机械工业出版社",
      "picture": "halayu2.jpg",
      "type": "类别2",
      "reserved": true,
      "buy_time": "2017-04-10",
      "school": "东校区"
    },
    {
      "id": "1001012",
      "num": "222",
      "author": "哈拉鱼3",
      "name": "可爱学",
      "publisher": "机械工业出版社",
      "picture": "halayu3.jpg",
      "type": "类别3",
      "reserved": true,
      "buy_time": "2017-04-10",
      "school": "东校区"
    },
    {
      "id": "1001013",
      "num": "222",
      "author": "哈拉鱼3",
      "name": "可爱学",
      "publisher": "机械工业出版社",
      "picture": "halayu4.jpg",
      "type": "类别4",
      "reserved": true,
      "buy_time": "2017-04-10",
      "school": "东校区"
    },
    {
      "id": "1001014",
      "num": "222",
      "author": "哈拉鱼3",
      "name": "可爱学",
      "publisher": "机械工业出版社",
      "picture": "halayu5.jpg",
      "type": "类别5",
      "reserved": false,
      "buy_time": "2017-04-10",
      "school": "东校区"
    }
  ]
;

module.exports.getOne = (req, res) => {
  let id = req.query.id.toString();
  console.log(id);
  for(let i = 0; i < data.length; i++) {
    if(data[i].id === id) {
      res.json(data[i]);
    }
  }
};

module.exports.getAll = (req, res) => {
  res.json(data)
};
