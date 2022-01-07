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

function saveForm(){
    let empData = new Employee_payrollData;

    let profile = document.querySelector('input[name="profile"]:checked');
    if(profile != null){
        empData.profilePic = profile.value;
    }
        
    let gender = document.querySelector('input[name="gender"]:checked');
    if(gender != null){
        empData.gender = gender.value;
    }

    empData.salary = document.querySelector('#salary').value;
    empData.note = document.querySelector('#notes').value;

    let day = document.querySelector('select[name=day]').value;
    let month = document.querySelector('select[name=month]').value;
    let year = document.querySelector('select[name=year]').value;
    let errorDate = document.querySelector("#date-error");
    try{
        empData.startDate = day + "/" + month + "/" + year;
        errorDate.textContent = " ";
    }
    catch(incorrectDate){
        errorDate.textContent = incorrectDate;
    }

    let department = new Array;
    document.getElementsByName('department').forEach( (elemnt) => {
        if(elemnt.checked == true){
            department.push(elemnt.value);
        }
    });
    empData.department = department;
};

function submitEmployeeForm(){
    window.location = "home.html";
}