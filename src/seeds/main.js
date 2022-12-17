import mockDepartments from './departments.json';
import mockEmployees from './employees.json';
import mockProjects from './projects.json';

const resetDb = async knex => {
  await knex.schema.raw(
    'TRUNCATE TABLE departments, employees, projects, employee_project RESTART IDENTITY CASCADE',
  );
};

const updateIdSeq = async (knex, table) => {
  await knex.schema.raw("SELECT setval('" + table + '_id_seq\',max(id)) from "' + table + '"');
};

const seedDepartmentTable = knex =>
  knex('departments')
    .del()
    .then(() => knex('departments').insert(mockDepartments, '*'))
    .then(() => updateIdSeq(knex, 'departments'));

const seedEmployeesTable = knex =>
  knex('employees')
    .del()
    .then(() => knex('employees').insert(mockEmployees, '*'))
    .then(() => updateIdSeq(knex, 'employees'));

const seedProjectsTable = knex =>
  knex('projects')
    .del()
    .then(() => knex('projects').insert(mockProjects, '*'))
    .then(() => updateIdSeq(knex, 'projects'));

exports.seed = async knex => {
  await resetDb(knex);

  await seedDepartmentTable(knex);
  await seedEmployeesTable(knex);
  await seedProjectsTable(knex);
};
