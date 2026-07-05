const express = require("express");
const router = express.Router();

const {
  addProgress,
  getProgress,
} = require("../controllers/progressController");

router.post("/", addProgress);
router.get("/", getProgress);

module.exports = router;