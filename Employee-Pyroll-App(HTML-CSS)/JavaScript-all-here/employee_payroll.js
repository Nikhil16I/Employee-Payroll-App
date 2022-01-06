function Salary() {
    /*Adding Eventlistner for Salary Range*/
    const salary = document.querySelector('#salary');
    const salaryOutput = document.querySelector('.salary-output');
    salaryOutput.textContent = salary.value;
    salary.addEventListener('input', function () {
        salaryOutput.textContent = salary.value;
    })
}
/*Adding event listener for Name while validating name*/
function Namevalidaiton() {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if (nameRegex.test(name.value)) {
            nameError.textContent = " ";
        }
        else {
            nameError.textContent = "Name is Invalid,Should start with Capital Letters";
        }
    })
}
/*Setting Condition for Start Date */
function Startdate() {
        const date = document.querySelector("#date");
        date.addEventListener('input',function(){
            const startDate = new Date(Date.parse(getInputValueById("#day")+" "+
                                                getInputValueById("#month")+" "+
                                                getInputValueById("#year")));
            if((new Employee_PayrollData()).startDate = startDate){                
                setTextValue('.date-error',"");
            }else{
                
                throw "Date Is Invalid";
            }
        });
    }
    const save = () => {
        try {
            let employeePayrollData = createEmployeePayroll();
        } catch (e) {
            return;
        }
    }
    
    const createEmployeePayroll = () => {
        let employeePayrollData = new employee_payrollData();
        try {
            employeePayrollData.name = getInputValueById('#name');
        } catch (e) {
            setTextValue('.text-error', e);
            throw e;
        }
    
        employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
        employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
        employeePayrollData.department = getSelectedValues('[name=department]');
        employeePayrollData.salary = getInputValueById('#salary');
        employeePayrollData.note = getInputValueById('#notes');
        let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
        employeePayrollData.start_date = Date.parse(date);
        console.log(employeePayrollData.toString());
        return employeePayrollData;
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

window.addEventListener('DOMContentLoaded', (Event) => {
    Salary();
    Namevalidaiton();
    Startdate();
})