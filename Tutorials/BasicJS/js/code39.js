console.log("Promises Basics, Promise.then() & Promise.catch()")

function func1() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log("Error has been resolved");
                resolve();
            }
            else {
                console.log("Your promise has not been reoslved")
                reject();            
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Bhai ye toh chal gaya. Promise rsolved")
}).catch(function(){
    console.log("nahi chala bhai. error maar gaya. error = false karde to change the result")
})

