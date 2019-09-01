const router = require('express').Router();
const users = require('./users');

router.get('/', (req, res) => {
  res.json({
    msg: 'api/v1 root'
  })
});

router.use('/users', users );


module.exports = router;
