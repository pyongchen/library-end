let app = require('./config/express');
let port = '8080';

app.listen(port, () => {
  console.log('server listen on ' + port);
});