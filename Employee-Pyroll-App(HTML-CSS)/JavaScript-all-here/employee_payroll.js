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
        let empData = createEmployeePayroll();
        createAndUpdateStorage(empData);
    } catch (e) {
        console.log(e);
        return;
    }
};

function createAndUpdateStorage(empData) {
  let employeePayrollList = JSON.parse(
      localStorage.getItem("EmployeePayrollList")
  );
  if (employeePayrollList != undefined) {
      employeePayrollList.push(empData);
  } else {
      employeePayrollList = [empData];
  }
  alert(employeePayrollList.toString());
  localStorage.setItem(
      "EmployeePayrollList",
      JSON.stringify(employeePayrollList)
  );
}
const createEmployeePayroll = () => {
    let empData = new employee_payrollData();
    try {
        empData.name = getInputValueById("#name");
    } catch (e) {
        setTextValue(".name-erro", e);
        throw e;
    }
    empData.id = createId();
    empData.profilePic = getSelectedValues("[name=profile]").pop();
    empData.gender = getSelectedValues("[name=gender]").pop();
    empData.department = getSelectedValues("[name=department]");
    empData.salary = getInputValueById("#salary");
    empData.note = getInputValueById("#notes");
    let date = getInputValueById("#day") + " " + 
               getInputValueById("#month") + " " + 
               getInputValueById("#year");
               empData.startDate = new Date (Date.parse(date));
    alert(new Date (Date.parse(date)));
    alert(empData.toString());
    return empData;
};

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach((item) => {
        if (item.checked) setItems.push(item.value);
    });
    return setItems;
};

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const resetForm = () => {
  setValue("#name", "");
  unsetSelectedValues("[name=profile]");
  unsetSelectedValues("[name=gender]");
  unsetSelectedValues("[name=department]");
  setValue("#salary", "");
  setValue("notes", "");
  setValue("#day", "1");
  setValue("#month", "January");
  setValue("#year", "2020");
};

const unsetSelectedValues = (propertyValue) => {
  let allItems = document.querySelector(id);
  allItems.foEach((item) => {
      item.checked = false;
  });
};

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
}; 

const createId = () => {
    var id = localStorage.getItem("currentId");
    if (id == undefined) {
      localStorage.setItem("currentId", 1);
      return 2;
    } else {
      id = parseInt(id) + 1;
      localStorage.setItem("currentId", id);
      return id;
    }
};