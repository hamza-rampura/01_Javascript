console.log("What is Asynchronous Programming?");



setTimeout(() => {
    for (let index = 0; index < 300; index++) {
        console.log(index)        
    }    
}, 1000);

console.log("done printing")