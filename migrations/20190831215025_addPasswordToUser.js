
exports.up = function (knex) {
  return knex.schema.table('users', function (t) {
    t.string('password').notNull();
  });

};

exports.down = function (knex) {
  return knex.schema.table('users', function (t) {
    t.dropColumn('password');
  });

};
