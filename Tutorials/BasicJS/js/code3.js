
console.log('Video2 Variables: let, const & var in JavaScript');
var name = `Hamza's`;
const name1 = `Quresh`; // Cant be chnaged. Global scope.
{
    let name = `Yasmin`; //Can eb chnaged. Block scope.
    console.log(name) // this will print block value
}
console.log(name) // this will print global value


const arr1 = [30, 25, 30, 25];
arr1.push(30);
console.log(arr1)
