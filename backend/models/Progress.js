const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    bmi: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Progress", progressSchema);