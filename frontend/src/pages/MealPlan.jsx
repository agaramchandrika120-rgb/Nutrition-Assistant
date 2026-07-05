import { useEffect, useState } from "react";
import API from "../services/api";

function MealPlan() {
  const [mealPlans, setMealPlans] = useState([]);
  const [newMealPlan, setNewMealPlan] = useState({
  clientName: "",
  breakfast: "",
  lunch: "",
  dinner: "",
  snacks: "",
});

  useEffect(() => {
    fetchMealPlans();
  }, []);

  const fetchMealPlans = async () => {
    try {
      const response = await API.get("/mealplan");
      setMealPlans(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load meal plans");
    }
  };
const handleChange = (e) => {
  setNewMealPlan({
    ...newMealPlan,
    [e.target.name]: e.target.value,
  });
};
const addMealPlan = async () => {
  try {
    await API.post("/mealplan/add", newMealPlan);

    alert("Meal plan added successfully");

    setNewMealPlan({
      clientName: "",
      breakfast: "",
      lunch: "",
      dinner: "",
      snacks: "",
    });

    fetchMealPlans();
  } catch (error) {
    console.log(error);
    alert("Failed to add meal plan");
  }
};
  return (
    <div>
      <h1>Meal Plan Management</h1>

<h3>Add Meal Plan</h3>

<input
  type="text"
  name="clientName"
  placeholder="Client Name"
  value={newMealPlan.clientName}
  onChange={handleChange}
/>
<br /><br />

<input
  type="text"
  name="breakfast"
  placeholder="Breakfast"
  value={newMealPlan.breakfast}
  onChange={handleChange}
/>
<br /><br />

<input
  type="text"
  name="lunch"
  placeholder="Lunch"
  value={newMealPlan.lunch}
  onChange={handleChange}
/>
<br /><br />

<input
  type="text"
  name="dinner"
  placeholder="Dinner"
  value={newMealPlan.dinner}
  onChange={handleChange}
/>
<br /><br />

<input
  type="text"
  name="snacks"
  placeholder="Snacks"
  value={newMealPlan.snacks}
  onChange={handleChange}
/>
<br /><br />

<button onClick={addMealPlan}>
  Add Meal Plan
</button>

<hr />
      <h3>Meal Plan List</h3>

      {mealPlans.length === 0 ? (
        <p>No meal plans found.</p>
      ) : (
        <ul>
          {mealPlans.map((plan) => (
            <li key={plan._id}>
  <strong>Client:</strong> {plan.clientName} <br />
  <strong>Breakfast:</strong> {plan.breakfast} <br />
  <strong>Lunch:</strong> {plan.lunch} <br />
  <strong>Dinner:</strong> {plan.dinner} <br />
  <strong>Snacks:</strong> {plan.snacks}
  <br /><br />
</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MealPlan;