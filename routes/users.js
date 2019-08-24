const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', (req, res) => {
  User.forge().
  fetchAll()
  .then((collection) => {
    res.json({ data: collection.toJSON() })
  })
  .catch((err) => {
    res.status(500).json({ msg: err.message });
  });
});

router.post('/', (req, res) => {
  const { name, email } = req.body;

  User.forge({
    name: name,
    email: email
  })
  .save()
  .then( (user) => {
    res.json({data: user});
  })
  .catch( (err) => {
    res.status(500).json({msg: err.message});
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  User.where({id: id})
  .fetch()
  .then((user) => {
    res.json({ data: user.toJSON() })
  })
  .catch((err) => {
    res.status(500).json({ msg: err.message });
  });
});

module.exports = router;
