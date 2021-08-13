console.log("hello generator");

function* numberGen() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

gen = numberGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
