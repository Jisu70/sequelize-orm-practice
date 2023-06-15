// Dependencies 
// const { Sequelize, Model } = require('sequelize');
// const sequelize = require('./index')

//  Defining Model using functional approach 
module.exports = (Model, Sequelize, sequelize) => {
class extendUser extends Model {}

extendUser.init({
  // Model attributes are defined here
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'extendUser' // We need to choose the model name
});
// the defined model is the class itself
// console.log(extendUser === sequelize.models.User); // true
}


//  Defining Model using functional approach 
module.exports = () => {
const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  tableName: 'Users'
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

}