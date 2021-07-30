console.log("hello index10");

//object
let car = {
  name: "maruti 800",
  topSpeed: 89,
  run: function () {
    console.log("car is running");
  },
};

console.log(car);
console.log(car.run());

//constructure
// ex- new Date
function GeneralCar(givenname, givenSpeed) {
  this.name = givenname;
  this.speed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
}

car1 = new GeneralCar("maruti", "200");
console.log(car1);
console.log(car1.name);
console.log(car1.run());

car2 = new GeneralCar("alto", "900");
console.log(car2);
console.log(car2.name);
console.log(car2.run());
