console.log("hello index6")

document.getElementById("id2").addEventListener("click",function(e){
    let myVar
    console.log(e)
    myVar= e.target;
    console.log(myVar)
    console.log("added event listener click on id2,")
    let myVar1 = Array.from(e.target.classList)
    console.log(myVar1)
    // location.href="./index.html"
});