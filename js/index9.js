console.log("hello index9");

let today = new Date()
console.log(today)
let day = today.getDay() //sun=0, mon=1, tue=2 ....
console.log(day)
console.log("date",today.getDate())
console.log("minutes", today.getMinutes())
// console.log("seconds from specific date", today.getTime())
console.log("fixe date", today.setDate(21))


//exercise
let divElem =document.createElement('div');
let text = document.createTextNode('this is heading to edit')
divElem.appendChild(text)
divElem.setAttribute("id", "elem"),
divElem.setAttribute("style", "border: 2px solid black;padding:23px;")

let linkDiv = document.getElementById('id2')
let linkDiv1 = document.getElementById('id3')
linkDiv.insertBefore(linkDiv, linkDiv1)