// const { Sequelize, Model, DataTypes } = require("sequelize");

// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
// For Main branch
// const sequelize = new Sequelize('relationship_management', 'root', '1234567890', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// For Second branch
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sql12626438", "sql12626438", "FPIdqsSDys", {
  host: "sql12.freesqldatabase.com",
  dialect: "mysql",
  logging: false, // This will stop the connection message from console
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.contact = require("./contact")(sequelize, DataTypes);
  db.user = require("./user")(sequelize, DataTypes, Model);

  await sequelize.sync({ force: true });

  module.exports = db;
})();
