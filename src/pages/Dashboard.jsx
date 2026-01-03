import { useState } from "react";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

function Dashboard() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h3>Student Dashboard</h3>

        <StudentForm onAdd={addStudent} />
        <StudentTable students={students} onDelete={deleteStudent} />
      </div>
    </>
  );
}

export default Dashboard;
