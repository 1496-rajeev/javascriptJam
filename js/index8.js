console.log("hello index8")

localStorage.setItem("test1", 1);
localStorage.setItem("test2", 1);
console.log(window.localStorage)

let test = localStorage.getItem("test1")
console.log(test)

localStorage.removeItem("test1")
console.log(window.localStorage)

let sabjiarray = ["sd", "klo", "hdbhd"]
// localStorage.setItem("sabji", sabjiarray)
localStorage.setItem("sabji", JSON.stringify(sabjiarray))

localStorage.getItem("sabji")

//JSON.stringify  (take object return string)
//JSON.Parse  (take string return object)

//session storage is same as local storage (sessionStorage.getItem etc...)