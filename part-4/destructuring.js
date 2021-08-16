console.log("hello destructuring");
//aray
[a, b, c] = [3, 4, 2];
console.log(a, b, c);

//array with ...
[a, b, c, ...d] = [0, 8, 4, "d", "h", 35, 3, 4];
console.log(a, b, c, d);

//objects
({ s, f, g, ...h } = { y: 5, f: 6, g: 8, h: 56, v: 2, z: 6, d: 9, s: 90 });
console.log(s, f, g, h);

//***** *

//array destructuring
const myVar = [2, 3, 4, 5, 6, 7, 5, 4, 9];
[a, b, ...c] = myVar;
console.log(a, b, c);

//object Destructuring
const employee = {
  name1: "rajeev",
  age: "23",
  salary: 83946,
  start: function () {
    console.log("started");
  },
};

const { name1, age, start } = employee;
console.log(name1, age);
start();
