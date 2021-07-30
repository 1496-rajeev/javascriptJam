console.log("hello index7")

// let myVar9=document.getElementsByClassName("class2");
// console.log(myVar9)
// for(let i=0;i<myVar9.length;i++){
//    myVar8 = myVar9[0]
//    console.log(myVar8)
// }
// myVar8.addEventlistener("click", fun);

// function fun(e){
//     console.log("thanks", e)
// }

//exercise
str = "google";
links = document.links;
console.log(str,links);
let href;
Array.from(links).forEach(function(elem){
    href=elem.href
    if (href.includes(str)){
        console.log(href)
    }
})
