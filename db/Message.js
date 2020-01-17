
const mongoose = require('mongoose');
const db = require('./config');
const Message = mongoose.Schema({
    name:String,
    message:String
  });
module.exports = mongoose.model("messages",Message);
