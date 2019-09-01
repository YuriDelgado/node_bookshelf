const db = require('../db/bookshelf');
const bcrypt = require('bcrypt');

const Project = require('./project');

const User = db.Model.extend({
  tableName: 'users',
  initialize: function () {
    this.on('saving', this.hashPassword, this);
  },
  hashPassword: (model, attrs, opts) => {
    console.log(model);
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(model.attributes.password, salt, (err, hash) => {
        console.log(err, hash);
          if (err) reject(err);

          model.set('password', hash);
          resolve(hash);
        });
      });
    });
  },
  projects() {
    return this.hasMany(Project);
  }

});

module.exports = User;
