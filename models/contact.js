// // Dependencies 
// const { Sequelize } = require('sequelize');
// const sequelize = require('./index')


//  Defining Model using functional approach 
const Contact = sequelize.define('contact', {
  // Model attributes are defined here
  permanent_address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  current_address: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
});


module.exports = Contact ;