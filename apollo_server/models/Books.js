const { model, Schema } = require("mongoose");

const bookSchema = new Schema({
  title: String,
  author: String,
});

module.exports = model("Books", bookSchema);
