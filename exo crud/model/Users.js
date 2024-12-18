

const db = require("../config/database.js") ;
const sequelize = require('sequelize');

const UserDb = db.define('UserDB', {
  id: { type: sequelize.INTEGER, primaryKey:true, autoIncrement:true,},
  name: {type : sequelize.STRING} ,
  age: {type : sequelize.INTEGER},
});

//const Jean = UserDb.create({name: 'Jean Dupont', age: 32});
//const Marie = UserDb.create({name: 'Marie Martin', age: 28});



 module.exports = {UserDb}