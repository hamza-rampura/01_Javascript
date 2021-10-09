console.log("Callback functions in javascript");



class Students {
    constructor(gname, gsubject) {
        this.name = gname;
        this.subject = gsubject;
    }
}

let stud1 = new Students("Hamza", "Physilogy");
let stud2 = new Students("Jazy", "Song wraps")

const students = [stud1, stud2];
console.log(students)

function enrollStudent(student, callback) {
    setTimeout(function(){
        students.push(student);
        console.log("student has been enrolled");
        callback();
    },5000)
}

function getStudents() {
    setTimeout(function(){
        let str = ""
        students.forEach(function(student){
            str += `<li> ${student.name}`;
            document.getElementById("students").innerHTML = str;
        });
        
        console.log("student has been fetched")
    },1000)
}
let newStudent = new Students("Sunny", "Python")

enrollStudent(newStudent, getStudents);
// getStudents();