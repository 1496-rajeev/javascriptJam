console.log("hello indexed.js");

const myArray = ["Aam", "kela", "pyaj", "bhindi", "santra"];

function Iterator(value) {
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex < value.length) {
        return {
          value: value[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

const fruitsIterator = Iterator(myArray);
console.log(fruitsIterator.next());
console.log(fruitsIterator.next());
console.log(fruitsIterator.next());
console.log(fruitsIterator.next());
console.log(fruitsIterator.next());
console.log(fruitsIterator.next());
console.log(fruitsIterator.next());
