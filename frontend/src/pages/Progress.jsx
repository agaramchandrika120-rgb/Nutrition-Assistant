import { useEffect, useState } from "react";
import API from "../services/api";

function Progress() {
  const [progressList, setProgressList] = useState([]);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const response = await API.get("/progress");
      setProgressList(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load progress");
    }
  };

  return (
    <div>
      <h1>Progress Tracking</h1>

      <h3>Progress Records</h3>

      {progressList.length === 0 ? (
        <p>No progress records found.</p>
      ) : (
        <ul>
          {progressList.map((progress) => (
            <li key={progress._id}>
  <strong>Client:</strong> {progress.clientName} <br />
  <strong>Weight:</strong> {progress.weight} kg <br />
  <strong>BMI:</strong> {progress.bmi} <br />
  <strong>Notes:</strong> {progress.notes}
  <br /><br />
</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Progress;