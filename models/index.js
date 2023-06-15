const { Sequelize } = require('sequelize');

// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('relationship_management', 'root', '1234567890', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
   sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// require('./contact')
// require('./user')

//  sequelize.sync will creat all defined table atonce 
// sequelize.sync({ force: true });
// console.log("All models were synchronized successfully.");

module.exports = sequelize ;