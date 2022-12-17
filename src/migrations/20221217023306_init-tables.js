const createDepartmentsTable = knex =>
  knex.schema.createTable('departments', table => {
    table.increments('id').primary();
    table.text('name');
  });

const createEmployeesTable = knex =>
  knex.schema.createTable('employees', table => {
    table.increments('id').primary();
    table.text('name');
    table.integer('salary').notNullable();
    table.integer('phone_number');
    table.text('email');
    table.integer('tax_pct_withheld');
    table.integer('medical_withheld');
    table.integer('other_deductions');
    table.integer('department_id').unsigned().references('id').inTable('departments');
  });

const createProjectsTable = knex =>
  knex.schema.createTable('projects', table => {
    table.increments('id').primary();
    table.text('name');
    table.integer('manager_id').unsigned().references('id').inTable('employees');
  });

const createEmployeeProjectTable = knex =>
  knex.schema.createTable('employee_project', table => {
    table.integer('employee_id').primary().unsigned().references('id').inTable('employees');
    table.integer('project_id').primary().unsigned().references('id').inTable('projects');
    table.timestamp('date').primary();
    table.float('hours').notNullable();
  });

exports.up = async knex => {
  await createDepartmentsTable(knex);
  await createEmployeesTable(knex);
  await createProjectsTable(knex);
  await createEmployeeProjectTable(knex);
};

exports.down = async knex =>
  knex.schema
    .dropTable('employee_project')
    .dropTable('projects')
    .dropTable('employees')
    .dropTable('departments');
1;
