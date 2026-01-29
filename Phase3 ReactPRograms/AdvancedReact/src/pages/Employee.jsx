function Employee() {
  const employees = [
    { id: 1, name: "Amit Sharma", role: "Developer", dept: "IT" },
    { id: 2, name: "Neha Verma", role: "HR Manager", dept: "HR" },
    { id: 3, name: "Rohit Singh", role: "Designer", dept: "UI/UX" },
  ];

  return (
    <div className="employee-container">
      <h1 className="title">Employee List</h1>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{employees[0].id}</td>
            <td>{employees[0].name}</td>
            <td>{employees[0].role}</td>
            <td>{employees[0].dept}</td>
          </tr>

          <tr>
            <td>{employees[1].id}</td>
            <td>{employees[1].name}</td>
            <td>{employees[1].role}</td>
            <td>{employees[1].dept}</td>
          </tr>

          <tr>
            <td>{employees[2].id}</td>
            <td>{employees[2].name}</td>
            <td>{employees[2].role}</td>
            <td>{employees[2].dept}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
