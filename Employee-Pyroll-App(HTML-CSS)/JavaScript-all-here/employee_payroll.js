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
function Startdate() {

}
window.addEventListener('DOMContentLoaded', (Event) => {
    Salary();
    Namevalidaiton();
    Startdate();
})