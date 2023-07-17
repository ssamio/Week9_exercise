const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    user: Schema.Types.ObjectId,
    items: [String]
});

module.exports = mongoose.model("Todo", todoSchema, "todos");