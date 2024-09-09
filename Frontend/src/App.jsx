import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/submit",
        formData
      );
      
      alert("form submitted successfully");
    } catch (error) {
      console.error("error submitting form", error);
      alert("failed to submit form");
    }
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label html=" username"> Username </label>
            <input
              type="text"
              name="name"
              id="username"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              id="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <button type="submit"> Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
