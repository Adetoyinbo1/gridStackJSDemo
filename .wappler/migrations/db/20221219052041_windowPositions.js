
exports.up = function(knex) {
  return knex.schema
    .createTable('windowPositions', async function (table) {
      table.increments('id');
      table.json('position');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('windowPositions')
};
