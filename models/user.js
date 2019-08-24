const db = require('../db/bookshelf');

const User = db.Model.extend({
  tableName: 'users'
});

module.exports = User;
