let student = {
    name: "Mustapha",
    studentID: 233,
    religion: "Islam",
    age: 24,

    teachers: function(){
        document.write(this.name);
    }
};

student.teachers();
document.write(student.studentID)