let app = require('./config/express');
let port = '8088';

app.listen(port, () => {
  console.log('server listen on ' + port);
});