console.log("this is regular expresssion");
let reg = /rajeev/; //regular expression literal

//metacharacters
let regex = /^r/; //start with "r"
regex = /r$/; //end with "r"
regex = /r.jeev/; //match  one character present on "."

regex = /r*jeev/; //match multiple character present on "*"
regex = /r\*jeev/; // here "*" is character to match
regex = /r?jeev/; //"r" may be may not be

console.log(reg.source);

//let reg = /rajeev/i;  // i case insensitive flag,g global flag

//function to match expressions

let s = "this is testing for rajeev expression rajeev";

let result = reg.exec(s); //return null or value
console.log(result);

let result2 = reg.test(s); //return true or false
console.log(result2);

let result3 = s.match(reg); //return array of result or null
console.log(result3);

let result4 = s.search(reg); //return index of 1st result or -1
console.log(result4);

let result5 = s.replace(reg, "shubham"); //return replaced string
console.log(result5);
