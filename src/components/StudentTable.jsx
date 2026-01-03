function StudentTable({ students, onDelete }) {
  if (students.length === 0) {
    return <p>No students added yet</p>;
  }

  return (
    <div className="card">
      <h4>Student List</h4>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
