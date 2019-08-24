const env = process.env.NODE_ENV || 'development';
const dbconfig = require('../config/database')[env];

const knex = require('knex')({
  client: 'pg',
  connection: dbconfig
});

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
