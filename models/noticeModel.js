const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: String,
  description: String,
  file: String,
  date: Date,
  author: String,
  department: String,
  likes: { type: Number, default: 0 },
  comments: [{ text: String, author: String }],
  tags: [String],
});

const Notice = mongoose.model("Notice", noticeSchema);
module.exports = Notice;
