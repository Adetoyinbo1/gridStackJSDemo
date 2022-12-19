
exports.up = function(knex) {
  return knex.schema
    .table('windowPositions', async function (table) {
      table.text('position').alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('windowPositions', async function (table) {
      table.json('position').alter();
    })
};
