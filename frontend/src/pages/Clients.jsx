import { useEffect, useState } from "react";
import API from "../services/api";

function Clients() {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({
  name: "",
  age: "",
  gender: "",
  height: "",
  weight: "",
  goal: "",
});

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await API.get("/clients");
      setClients(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load clients");
    }
  };
  const handleChange = (e) => {
  setNewClient({
    ...newClient,
    [e.target.name]: e.target.value,
  });
};
const addClient = async () => {
  try {
    await API.post("/clients/add", newClient);

    alert("Client added successfully");

    setNewClient({
      name: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
      goal: "",
    });

    fetchClients();
  } catch (error) {
    console.log(error);
    alert("Failed to add client");
  }
};

  return (
    <div>
      <h1>Client Management</h1>
<h3>Add New Client</h3>

<input
  type="text"
  name="name"
  placeholder="Name"
  value={newClient.name}
  onChange={handleChange}
/>
<br /><br />

<input
  type="number"
  name="age"
  placeholder="Age"
  value={newClient.age}
  onChange={handleChange}
/>
<br /><br />

<input
  type="text"
  name="gender"
  placeholder="Gender"
  value={newClient.gender}
  onChange={handleChange}
/>
<br /><br />

<input
  type="number"
  name="height"
  placeholder="Height (cm)"
  value={newClient.height}
  onChange={handleChange}
/>
<br /><br />

<input
  type="number"
  name="weight"
  placeholder="Weight (kg)"
  value={newClient.weight}
  onChange={handleChange}
/>
<br /><br />

<input
  type="text"
  name="goal"
  placeholder="Goal"
  value={newClient.goal}
  onChange={handleChange}
/>
<br /><br />

<button onClick={addClient}>Add Client</button>

<hr />
      <h3>Client List</h3>

      {clients.length === 0 ? (
        <p>No clients found.</p>
      ) : (
        <ul>
          {clients.map((client) => (
            <li key={client._id}>
  <strong>{client.name}</strong><br />
  Age: {client.age}<br />
  Gender: {client.gender}<br />
  Height: {client.height} cm<br />
  Weight: {client.weight} kg<br />
  Goal: {client.goal}
</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Clients;