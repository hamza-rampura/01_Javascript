/* console.log("Regular Expressions - Character sets");

let regex = /^ha/i;
const str = "harhar Bhai";
// character sets

regex = /h[aty]mza/i; //can be a,t or y
regex = /h[a-z]mza/i; //can be ny from a to z
regex = /h[^ty]mza/; // here ^ means "not", shall not be t,y
regex = /h[a-zA-Z]mza/; //case sensitivity

// quantifies
regex = /Har{2}y/; // r can repeat exactly 2 times
regex = /Har{0,2}y/; // r can repeat 0 to 2 time 0,1,2

// groupings we can do using parenthesis

regex = /h{2}(*)/;


if(regex.test(str)) {
    console.log(`Pass`);
    let result = regex.exec(str);
    console.log(result);
} else {
    console.log(`Fail`);
}
 */
/* code from harry */

console.log("This is tutorial 48");
// Regular Expressions:
    // Basic functions 
    // Metacharacter Symbols

// const regex = /^h/i;

// Character Sets - We use []
let regex = /h[a-z]rry/; // can be any character from a to z
regex = /h[aty]rry/; // can be an a, t or y
regex = /h[^aty]rry/; // cannot be any of a, t or y
regex = /h[^aty]rr[yYu]/; // cannot be any of a, t or y + can be a u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many character sets as we want

// Quantifiers - We use {}
regex = /har{2}y/; // r can occur exactly 2 times
regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings  - We use paranthesis for groupings ()
regex = /(har){2}([0-9]r){3}/

// const str = "hirry9 bhai";
str = "harrry bhai"
str = "harhar1r4r5r bhai";


let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}
