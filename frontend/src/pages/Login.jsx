import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
    const [formData, setFormData] = useState({
  email: "",
  password: "",
});
const navigate = useNavigate();
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await API.post("/auth/login", formData);
    alert(response.data.message);
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
alert(error.response?.data?.message || error.message);
  }
};
  return (
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;