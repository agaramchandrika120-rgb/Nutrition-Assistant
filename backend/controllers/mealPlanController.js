const MealPlan = require("../models/MealPlan");

// Add a new meal plan
const addMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.create(req.body);

    res.status(201).json({
      message: "Meal plan added successfully",
      mealPlan,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get all meal plans
const getMealPlans = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find();

    res.status(200).json(mealPlans);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addMealPlan,
  getMealPlans,
};