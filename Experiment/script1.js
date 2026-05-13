let employees = [];

// Add Employee
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = Number(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (!name || !id || !salary || !dept) {
        alert("Please fill all fields");
        return;
    }

    let emp = {
        name: name,
        id: id,
        salary: salary,
        dept: dept
    };

    employees.push(emp);
    alert("Employee Added!");
}

// Display All Employees
function displayEmployees() {
    let output = "<h3>All Employees:</h3>";

    employees.forEach(emp => {
        output += `Name: ${emp.name}, ID: ${emp.id}, Salary: ₹${emp.salary}, Dept: ${emp.dept} <br>`;
    });

    document.getElementById("output").innerHTML = output;
}

// Filter Salary > 50000
function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);

    let output = "<h3>Employees with Salary > ₹50,000:</h3>";

    filtered.forEach(emp => {
        output += `Name: ${emp.name}, Salary: ₹${emp.salary} <br>`;
    });

    document.getElementById("output").innerHTML = output;
}

// Total Salary
function totalSalary() {
    let total = 0;

    employees.forEach(emp => {
        total += emp.salary;
    });

    document.getElementById("output").innerHTML =
        `<h3>Total Salary Payout: ₹${total}</h3>`;
}

// Average Salary
function averageSalary() {
    let total = 0;

    employees.forEach(emp => {
        total += emp.salary;
    });

    let avg = employees.length ? total / employees.length : 0;

    document.getElementById("output").innerHTML =
        `<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`;
}

// Count by Department
function countDepartment() {
    let deptMap = {};

    employees.forEach(emp => {
        if (deptMap[emp.dept]) {
            deptMap[emp.dept]++;
        } else {
            deptMap[emp.dept] = 1;
        }
    });

    let output = "<h3>Employee Count by Department:</h3>";

    for (let dept in deptMap) {
        output += `${dept}: ${deptMap[dept]} <br>`;
    }

    document.getElementById("output").innerHTML = output;
}