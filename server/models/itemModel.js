const mongoose = require("./index.js");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  dateSet: Number,
  deadline: Number,
  title: String,
  description: String,
  done: Boolean,
});

module.exports = mongoose.model('items', itemSchema);