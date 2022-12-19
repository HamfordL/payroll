# Payroll Management System

## Set up the Pharos Backend Application

Clone the pharos-backend repository to your local machine

### Install or Update Project Dependencies

```
npm install or npm i
```

_YOU MUST RUN THIS COMMAND BEFORE ANYTHING ELSE!_

### How to start just the app (without database)

```
npm run app
```

### How to setup the Database

Start the PostgreSQL container with the following command:

```
npm run start-db
```

**Give Docker some time to bring up the container.**

Once the container is up and running PostgreSQL, migrate tables and seed the newly created database with default dummy data using the following command:

```
npm run setup-db
```

That's it! Your local env is setup to run a database with default data. Your app or db viewer can connect to the db using information found in src/db.env
