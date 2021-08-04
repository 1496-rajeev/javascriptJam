console.log("hello index.js");

//function syntax 1
function func1() {
  console.log("hello func1");
}

func1();

//syntax-2
const func2 = function () {
  console.log("hello func2");
};

func2();

// syntax-3
const func3 = () => {
  console.log("hello func3");
};

func3();

// syntax-4
const func4 = () => {
  return "hello func4";
};

console.log(func4());

// syntax-5
const func5 = () => "hello func5";
console.log(func5());

// syntax-6
const func6 = (name) => "hello " + name;
console.log(func6("rajeev"));

// syntax-7
const func7 = (name, age) => "hello " + name + " age " + age;
console.log(func7("rajeev", 25));

// syntax-for object
const func8 = () => ({ name: "rajeev" });
console.log(func8());
