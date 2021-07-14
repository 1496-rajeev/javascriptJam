console.log("hello index4.js")

let a = window;
console.log(a)

let b = prompt("Enter anything")
console.log(b)

let c = confirm("are you sure to delete?")
console.log(c)

let d = document;
console.log(d)

console.log(location)
console.log(location.origin)

console.log(document.body, document.all)

e = document.all;
Array.from(a).forEach(function(element) {
    connsole.log(element)
});

f = document.links;
Array.from(f).forEach(function(elem) {
    if (elem.href.includes("google")) {
        console.log(elem.href)
    }
})