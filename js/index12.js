console.log("hello index12");

class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  slogan() {
    return `I am ${this.name}`;
  }
  static add(a, b) {
    return a + b;
  }
}

emp1 = new Employee("rajeev", 25);
console.log(emp1);
console.log(emp1.slogan());
console.log(Employee.add(3, 5)); //static method call

//class inehritance.
class Programmer extends Employee {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }
  languageshoe() {
    return `language ${this.language}`;
  }
  static add(a, b) {
    return a + b;
  }
}

const prog1 = new Programmer("rajeev", 24, "python");
console.log(prog1);
console.log(prog1.languageshoe());
console.log(Programmer.add(4, 5));
