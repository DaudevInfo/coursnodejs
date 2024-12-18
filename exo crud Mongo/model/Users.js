
const mongoose = require('mongoose');

const schema = mongoose.Schema ({
  name : String,
  age : Number
})


  const UserDb = mongoose.model('UserDB', schema)
  console.log("UserDb = " + UserDb)
  module.exports = UserDb