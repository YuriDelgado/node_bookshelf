const db = require('../db/bookshelf');
const { User } = require('./index');

const Project = db.Model.extend({
  tableName: 'projects',
  user() {
    return this.belongsTo(User)
  }

});

module.exports = Project;
