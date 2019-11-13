const Sequelize = require("sequelize");
const db = require("../db");

//my ad has a title, description, picture (url), price, email address and phone number
const Ad = db.define(
  "ad",
  {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    url: Sequelize.TEXT,
    price: Sequelize.DECIMAL,
    email: Sequelize.STRING,
    phone: Sequelize.INTEGER
  },
  {
    timestamps: false
  }
);

module.exports = Ad;
