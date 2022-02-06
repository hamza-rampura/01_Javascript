/* ES6  with Thapa Tech*/

// default parameters 

/* let add = function (a,b = 5) {
    console.log(a+b)
}
add(5); */

// rest parameters

/* let add = function(a,...b) {
    console.log(a,b);
    let sum = 0 + a;
    console.log(sum + b)
    for(let e of b) {
        sum += e;
    }
    console.log(sum)
}

add(2,5,6,8,9,15); */

// spread operator 

/* function add (a,b,...c) {
    console.log(a,b,c)
    console.log(a+b+c);
}

let arr = [1,2,3,4,5];
add(...arr); */
// let arr = [1,2,3,4,5];
// console.log(arr./* map *//* filer */every((val,ind) => {
//     return val > 0;
// }));

// test call & apply function

let parent = {
    sum: function() {
        console.log(this.int1 + this.int2)
    }
}

let numbers = {
    int1: 25,
    int2 : 45
}
// console.log(parent.sum);
parent.sum.apply(numbers);

sum.apply( )




