const express = require('express');
const router = express.Router();
const { Project } = require('../models');

router.get('/', (req, res) => {
  Project.forge().
  fetchAll()
  .then((collection) => {
    res.json({ data: collection.toJSON() })
  })
  .catch((err) => {
    res.status(500).json({ msg: err.message });
  });
});

router.post('/', (req, res) => {
  const { name } = req.body;

  Project.forge({ name: name })
  .save()
  .then( (project) => {
    res.json({data: project});
  })
  .catch( (err) => {
    res.status(500).json({msg: err.message});
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Project.where({id: id})
  .fetch()
  .then((project) => {
    res.json({ data: project.toJSON() })
  })
  .catch((err) => {
    res.status(500).json({ msg: err.message });
  });
});

module.exports = router;
