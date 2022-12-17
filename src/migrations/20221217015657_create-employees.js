exports.up = knex =>
  knex.schema.createTable('employees', table => {
    table.increments('id').primary();
    table.text('name');
    table.integer('salary').notNullable();
    table.integer('phone_number');
    table.text('email');
    table.integer('tax_pct_withheld');
    table.integer('medical_withheld');
    table.integer('other_deductions');
    table.integer('department_id').unsigned().references('id').inTable('department');
  });

exports.down = knex => knex.schema.dropTable('employees');
