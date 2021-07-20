console.log("hello index11");

//object literal

let obj = {
  name: "rajeev",
  age: "24",
};

console.log(obj);

//constructor

function Obj(givenName) {
  this.name = givenName;
}

//prototype
Obj.prototype.getName = function () {
  return this.name;
};

//construct new object
let obj2 = new Obj("rajeev");

console.log(obj2);
console.log(obj2.getName());

//prototype inheritance
const proto = {
  slogan: function () {
    return "this company is best";
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

//created an object1
const rajeev = Object.create(proto);
rajeev.name = "Rajeev";
rajeev.role = "Programmer";
rajeev.changeName("rajeev2");

console.log(rajeev);

//same as object1 only syntax change
const rajeev1 = Object.create(pract, {
  name: { value: "rajeev", writable: true },
  role: { value: "programmer" },
});
