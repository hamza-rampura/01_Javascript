console.log("Regular Expressions - Metacharacters in JavaScript");

let regex = /Hamza/i;

//lets loom into some meta character symbols

regex = /^h/i; // checkes starts with

regex = /e!$/i;//ends with
regex = /H.mza/i// instead of dot matches any one character, each dot for one character
regex = /H*a/i// matches n number of characters
regex = /Hq?x?a/i// optional characters before question mark
regex = /H\*mza/ //escape character is backlash

let str = "H*mza Rampurawala";

let result = regex.exec(str);
console.log(result);

if(regex.test(str)) {
    console.log(`the ${regex.source} matches with the condition in "${str}" provided`);
} else {
    console.log(`The ${regex.source} does not match with the condition in ${str} provided`);
}