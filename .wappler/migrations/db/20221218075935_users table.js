
exports.up = function(knex) {
  return knex.schema
    .createTable('users', async function (table) {
      table.increments('id');
      table.string('name');
      table.string('avatar');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('users')
};
