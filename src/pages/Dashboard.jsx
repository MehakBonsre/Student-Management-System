import { useState } from "react";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";
import "../App.css";

function Dashboard() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h2>Student Dashboard</h2>

        {/* Add Student Card */}
        <div className="card">
          <StudentForm onAdd={addStudent} />
        </div>

        {/* Student List Card */}
        <div className="card">
          <StudentTable students={students} onDelete={deleteStudent} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
