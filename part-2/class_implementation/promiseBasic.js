console.log("hello promiseBasic");

//from server
const students = [
  {
    name: "harry",
    subject: "javascript",
  },
  { name: "mukesh", subject: "python" },
];

//exicute after 3 seconds
function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    students.push(student);
    console.log("enrolltudent exicuted");
    const error = false;
    if (!error) {
      resolve();
    } else {
      reject();
    }
  });
}

//exicute after 1 seconds
function getStudent() {
  setTimeout(function () {
    console.log("enrolltudent exicuted");
    students.forEach(function (student) {
      console.log(student.name);
    });
  }, 1000);
}

let newStudent = { name: "abc", subject: "java" };

enrollStudent(newStudent)
  .then(getStudent)
  .catch(function () {
    console.log("some error");
  });

function Add(a, b) {
  return new Promise(function (resolve, reject) {
    console.log(a + b);
    const error = false;
    if (!error) {
      resolve();
    } else {
      reject();
    }
  });
}

Add(3, 5)
  .then(function () {
    console.log("added");
  })
  .catch(function () {
    console.log("some error");
  });
