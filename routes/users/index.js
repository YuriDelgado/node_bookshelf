const models = require('express').Router();
const {all, fetch, create } = require('./users');

models.get('/', all);
models.get('/:id', fetch);
models.post('/', create);

module.exports = models;
