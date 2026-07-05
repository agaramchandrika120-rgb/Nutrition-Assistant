const express = require("express");
const {
  addMealPlan,
  getMealPlans,
} = require("../controllers/mealPlanController");

const router = express.Router();

router.post("/add", addMealPlan);
router.get("/", getMealPlans);

module.exports = router;