import { useState } from "react";

function StudentForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    email: "",
    course: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, roll, email, course } = formData;

    if (!name || !roll || !email || !course) {
      setError("All fields are required");
      return;
    }

    if (!/^\d+$/.test(roll)) {
      setError("Roll number must be numeric");
      return;
    }

    setError("");
    onAdd(formData);

    setFormData({
      name: "",
      roll: "",
      email: "",
      course: "",
    });
  };

  return (
    <div className="card">
      <h4>Add Student</h4>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="roll"
          placeholder="Roll No"
          value={formData.roll}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StudentForm;
