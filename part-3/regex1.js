console.log("hello regex1");

//[] character set
let regex = /a[a-z]e/;
regex = /a[ary]e/; //can be any character a,r,y
regex = /a[^ary]e/; //can not be character a,r,y
regex = /a[^ary]e/; //can not be character A,R,Y set is case sensitive
regex = /a[a-zA-Z0-9][0-9]e/;
const str = "who are you?";

result = regex.exec(str);
console.log(result);

//Quantifiers {}
let regex1 = /ar{2}e/; //r should be two times
regex1 = /ar{0,2}e/; // r can be zero to two (0,1,2)
const str1 = "who arre you?";

result = regex1.exec(str1);
console.log(result);

//groupings ()
let regex2 = /ar(ra){2}e/; //ra should be two times
regex2 = /ar(ra[0-9]){2}e/;
const str2 = "who arra1ra7e you?";

result = regex2.exec(str2);
console.log(result);
