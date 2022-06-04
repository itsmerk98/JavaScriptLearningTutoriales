var student = {
    'firstName': 'Marie',
    'LastName': 'Smith',
    'FullName': function(){
        return this.firstName + " " + this.LastName;
    }
}
console.log(student.FullName());