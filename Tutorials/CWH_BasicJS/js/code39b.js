console.log("Promises Basics, Promise.then() & Promise.catch()");



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

function enrollStudent(student) {
    return new Promise(function(resolve, reject){ 
        setTimeout(function(){
            students.push(student);
            const error = false;
            if(!error) {
                resolve();
            }
            else {
                reject();
            }
        },5000)
    })
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

enrollStudent(newStudent).then(function(){console.log("resolve ho gaya bacha!"); getStudents();}).catch(function(){console.log("Fail ho gaya hai re baba")});
