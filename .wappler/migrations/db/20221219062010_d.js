
exports.up = function(knex) {
  return knex.schema
    .table('windowPositions', async function (table) {
      table.dropColumn('position');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('windowPositions', async function (table) {
      table.text('position');
    })
};
