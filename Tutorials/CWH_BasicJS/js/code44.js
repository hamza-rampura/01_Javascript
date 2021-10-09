console.log("Error Handling & Try Catch in Javascript");

let a = "Hamza Boss";

//Pretend this is coming from a server
a = undefined;
if (a === undefined) {
    throw new Error("This is not undefined");
}
else {
    console.log(`this is undefined`);
}



// try block

try {
    gibberish,likhenge,idhar,taki,mein,jaye
} catch (error) {
    console.log(error); // htis the error jiske wajah se try nahi chala
    throw new Error(error);
} finally {
    console.log(`Finally we will run this`);
}
