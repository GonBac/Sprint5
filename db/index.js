const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "a123456789",
    database: "Sprint4",
  },
});

module.exports = { knex };
