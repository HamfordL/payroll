exports.up = knex =>
  knex.schema.createTable('departments', table => {
    table.increments('id').primary();
    table.text('name');
  });

exports.down = knex => knex.schema.dropTable('departments');
