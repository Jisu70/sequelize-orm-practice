// Dependencies
// const { DataTypes } = require("sequelize");
// const sequelize = require("./index");

module.exports = (sequelize, DataTypes) => {
  //  Defining Model using functional approach
  const Contact = sequelize.define("contact", {
    // Model attributes are defined here
    permanent_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_address: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  });
  return Contact;
};

// module.exports = Contact;
