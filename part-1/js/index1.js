console.log("hello index1.js")
    // type conversion
var myVar = 38;
console.log(String(myVar))
console.log(myVar.toString())
var myVar1 = "3"
console.log(Number(myVar1))

var myVar3 = "5.98647346"
console.log(parseInt(myVar3))
console.log(parseFloat(myVar3))
console.log(parseFloat(myVar3).toFixed(2))

var myVar2 = "HFF"
console.log(Number(myVar2)) // NaN = NOT A NUMBER

// type coercion

var myVar4 = "785"
var myVar5 = 90
console.log(myVar4 + myVar5)