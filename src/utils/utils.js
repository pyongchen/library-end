exports.sendData = function(res, data, msg){
  let time;
  time = new Date();
  return res.send({
    res: data,
    time: time,
    msg: msg
  });
};
