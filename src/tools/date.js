module.exports = {
  format(date) {
    let d = date;
    if(!(d instanceof Date)) d = new Date(d);
    let yyyy = d.getFullYear();
    let mm = d.getMonth();
    if(mm < 10) mm = '0' + mm;
    let dd = d.getDate();
    if(dd < 10) dd = '0' + dd;
    return yyyy + '-' + mm + '-' + dd
  }
}
