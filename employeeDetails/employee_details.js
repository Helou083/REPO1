const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialisation: 'Javascript'},
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialisation: 'Python'},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialisation: 'Java'},
      //... More employee records can be added here
    ];
    // Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialisation}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}
function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }
function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =
            `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialisation}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML =
            'No employee has been found with this ID';
    }
}
function findbySpecialisation(employeeSpecialisation) {
    const found = employees.find(emp => emp.specialisation === employeeSpecialisation);
    if (found) {
        document.getElementById('employeesDetails').innerHTML =
            `<p>${found.id}: ${found.name} - ${found.department} - $${found.salary} - ${found.specialisation}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML =
            'No employee has been found with this specialisation';
    }
}