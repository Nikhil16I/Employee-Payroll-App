window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.name-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = " ";
            return;
        }
        try {
            (new Employee_payrollData()).name = name.value;
            textError.textContent = " ";
        } catch (invalidName) {
            textError.textContent = invalidName;
        }
    });

    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
});
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
    } catch (e) {
        return;
    }
}

const createEmployeePayroll = () => {
    let empData = new employee_payrollData();
    try {
        empData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    empData.profilePic = getSelectedValues('[name=profile]').pop();
    empData.gender = getSelectedValues('[name=gender]').pop();
    empData.department = getSelectedValues('[name=department]');
    empData.salary = getInputValueById('#salary');
    empData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    empData.start_date = Date.parse(date);
    console.log(empData.toString());
    return empData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked)
            selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
function submitEmployeeForm(){
    window.location = "home.html";
}
// saving the data into local storage
function createAndUpdateStorage(empData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(empData);
    } else {
        employeePayrollList = [empData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}