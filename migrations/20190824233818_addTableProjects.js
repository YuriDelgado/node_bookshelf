
exports.up = function (knex) {
  return knex.schema
    .createTable('projects', function (table) {
      table.increments('id');
      table.string('name', 255).notNullable();
      table.integer('user_id').notNullable();
      table.timestamps();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("projects");
};
