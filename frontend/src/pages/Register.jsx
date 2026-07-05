import { useState } from "react";
import API from "../services/api";

function Register() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  role: "client",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await API.post("/auth/register", formData);
    alert(response.data.message);
  } catch (error) {
    alert(error.response?.data?.message || "Registration failed");
  }
}; 
  return (
    <div>
      <h2>Register Page</h2>

      <form onSubmit={handleSubmit}>
  <input
    type="text"
    name="name"
    placeholder="Enter Name"
    value={formData.name}
    onChange={handleChange}
  />
  <br /><br />

  <input
    type="email"
    name="email"
    placeholder="Enter Email"
    value={formData.email}
    onChange={handleChange}
  />
  <br /><br />

  <input
    type="password"
    name="password"
    placeholder="Enter Password"
    value={formData.password}
    onChange={handleChange}
  />
  <br /><br />

  <select
    name="role"
    value={formData.role}
    onChange={handleChange}
  >
    <option value="client">Client</option>
    <option value="nutritionist">Nutritionist</option>
  </select>

  <br /><br />

  <button type="submit">Register</button>
</form>
    </div>
  );
}

export default Register;