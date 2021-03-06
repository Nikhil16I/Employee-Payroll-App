class Employee_payrollData {

    get id() { return this._id }
    set id(id) {
        this._id = id
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = /^[A-Z][A-Z a-z]{3,}$/;
        if (nameRegex.test(name)){
            this._name = name;
        }
        else{ 
            throw "Name is incorrect !";
        }
    }

    get profilePic() { return this._profilePic }
    set profilePic(profilePic) {
        this._profilePic = profilePic
    }

    get gender() { return this._gender }
    set gender(gender) {
        this._gender = gender
    }

    get department() { return this._department }
    set department(department) {
        this._department = department
    }

    get salary() { return this._salary }
    set salary(salary) {
        this._salary = salary
    }

    get note() { return this._note }
    set note(note) {
        this._note = note
    }
    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        let now = new Date();
        if(startDate > now)throw "Start Date is a future Date !"
        var diff = Math.abs(now.getTime()-startDate.getTime());
        if(diff /(1000*60*60*24)>30)throw "Satrt date is Beyond 30 Days.";
        this._startDate=startDate;
    }
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.start_date ? "undefined" : this.start_date.toLocaleDateString("en-US", options);
        return 'Name = ' + this.name + ", Gender = " + this.gender + ", ProfilePic = " + this.profilePic +
            ", Department = " + this.department + ", Salary = " + this.salary + ", StartDate = " + empDate + ", Note = " + this.note;
    }
}

