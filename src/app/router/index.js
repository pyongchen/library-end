let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  return res.end('12345');
});

module.exports = router;