const Progress = require("../models/Progress");

// Add a new progress record
const addProgress = async (req, res) => {
  try {
    const progress = await Progress.create(req.body);

    res.status(201).json({
      message: "Progress added successfully",
      progress,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get all progress records
const getProgress = async (req, res) => {
  try {
    const progress = await Progress.find();

    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addProgress,
  getProgress,
};