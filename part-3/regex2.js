console.log("hello regex2");

let regex = /\wou/; //  \w means worls character means contain _ or alphabet or numbers
regex = /\w+ou/; //  \w+ means one or more worls character

regex = /\Wou/; //  \W (capital W) means non-worls character, W+ more than one non-world

regex = /\ddigit/; //  \d means digits, d+ more than one digits

regex = /\Ddigit/; //  \D means non-digits, D+ more than one non-digits

regex = /\sarre/; //  \s means white space, s+ more than one whitespace

regex = /\Sarre/; //  \S means non-white space(meansonecharacter), S+ more than one non-whitespace(more than one character)

regex = /arre\b/; //  \b means one space (end of the word (word boundary))

//Assertions
regex = /w(?=h)/; // after "w" there should be "h"

regex = /w(?!h)/; // after "w" there should not be "h"

const str = "who arre you? %ou 6digit";

result = regex.exec(str);
console.log(result);
