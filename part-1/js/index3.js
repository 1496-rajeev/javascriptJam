console.log("hello index3.js")

function test(num1, num2) {
    return num1 + num2;
}

var addvalue = test(3, 8)
console.log(addvalue)

// second method to use function

const myFunction = function(num1, num2) {
    return num1 + num2
}

let addedvalue2 = myFunction(3, 4)
console.log(addedvalue2)

//forEach

let arr = ["1a", "2b", "3c"]

arr.forEach(function(element, index) {
    console.log(element, index)
});

//