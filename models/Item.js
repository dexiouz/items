const 
  mongoose = require("mongoose"),
  Schema  = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema)