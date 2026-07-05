import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Nutrition Assistant Dashboard</h1>

      <h3>Welcome!</h3>

      <ul>
        <li>
          <Link to="/clients">
            <button>👥 Client Management</button>
          </Link>
        </li>

        <li>
          <Link to="/mealplan">
  <button>🍽️ Meal Plan Management</button>
</Link>
        </li>

        <li>
          <Link to="/progress">
  <button>📈 Progress Tracking</button>
</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;