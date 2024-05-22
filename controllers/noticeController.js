const Notice = require("../models/noticeModel");
const mongoose = require("mongoose");

exports.createNotice = async (req, res) => {
  try {
    const { title, description, date, author, department, tags } = req.body;
    console.log(req.body);
    const newNotice = new Notice({
      title,
      description,
      date,
      author,
      department,
      tags,
    });

    console.log("saving", req.body);
    await newNotice.save();
    res.status(201).json(newNotice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json(notices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date, author, tags, department } = req.body;
    const file = req.file ? req.file.path : null;
    const updatedNotice = await Notice.findByIdAndUpdate(
      id,
      { title, description, file, date, author, tags, department },
      { new: true }
    );
    res.json(updatedNotice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;
    await Notice.findByIdAndDelete(id);
    res.json({ message: "Notice deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
