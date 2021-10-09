console.log("Iterators in JavaScript ");

// Iterators 

const arr = ["apple", "grapes", "bananas", "oranges"];
console.log(`My array is ${arr}`);

function fruitsIterator(values) {
    let nextIndex = 0;
    //we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // we will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

// using the iterator

const fruits = fruitsIterator(arr);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());