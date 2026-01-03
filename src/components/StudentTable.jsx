function StudentTable({ students, onDelete }) {
  return (
    <table border="1" width="100%">
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
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
