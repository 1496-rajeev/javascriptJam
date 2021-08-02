console.log("hello index1.js");

//from server
const students = [
  {
    name: "harry",
    subject: "javascript",
  },
  { name: "mukesh", subject: "python" },
];

//exicute after 3 seconds
function enrollStudent(student, callback) {
  setTimeout(function () {
    console.log("enrolltudent exicuted");
    students.push(student);
    callback();
  }, 3000);
}

//exicute after 1 seconds
function getStudent() {
  setTimeout(function () {
    console.log("getstudent exicuted");
    students.forEach(function (student) {
      console.log(student.name);
    });
  }, 1000);
}

let newStudent = { name: "abc", subject: "java" };

enrollStudent(newStudent, getStudent);
