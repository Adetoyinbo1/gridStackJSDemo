
exports.up = function(knex) {
  return knex.schema
    .table('windowPositions', async function (table) {
      table.text('position_new');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('windowPositions', async function (table) {
      table.dropColumn('position_new');
    })
};
