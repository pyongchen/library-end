module.exports = {
  format(date) {
    let d = new Date(date);
    let yyyy = d.getFullYear();
    let mm = d.getMonth();
    if(mm < 10) mm = '0' + mm;
    let dd = d.getDate();
    if(dd < 10) dd = '0' + dd;
    return yyyy + '-' + mm + '-' + dd
  }
}
