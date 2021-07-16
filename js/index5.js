console.log("hello index5.js")

myVar = document.querySelector('h1') //first h1 tag
console.log(myVar)

myVar2 = document.querySelector('#id1')
console.log(myVar2)

myVar3 = document.getElementsByClassName('class1')
console.log(myVar3)

myVar4 = document.getElementsByTagName('h1')
console.log(myVar4) // all h1 tags

for (let index = 0; index < array.length; index++) {
    const element = myVar4[index];
    console.log(element)
    
}