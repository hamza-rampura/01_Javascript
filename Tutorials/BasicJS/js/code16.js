// console.log("Children, Parent & Traversing the DOM");
// console.log(`Creating child using JS`);

// let elem = document.createElement('li');
// elem.className = "mera-class";
// elem.setAttribute(`title`, `meraElement`);
// elem.innerHTML = `Yeh <strong>maine</strong> banaya hai`;
// let parent = document.querySelector(`ul.this`);
// parent.appendChild(elem)
// console.log(elem);

// let elem2 = document.createElement(`h2`);
// elem2.innerHTML=`This is a replacement heading!`;
// elem.replaceWith(elem2);
// let elemreplaceTest = document.getElementById("toReplace");
// console.log(elemreplaceTest);
// // console.log(document.querySelector(`.fui`))
// elemreplaceTest.replaceChild(elem, document.getElementById(`fui`));
// // let test1 = document.querySelector('.childul1');
// // console.log(typeof test1)

// elemreplaceTest.removeChild(document.querySelector(`.childul1`));
// console.log(`of my dreams udd gaya`)

// /* quiz from harry */ 
// let header = document.createElement (`h1`);
// header.innerText = "Go to Code With Harry"
// let parent1 = document.getElementsByTagName(`body`)[0];
// console.log(typeof parent1)

// /* Array.from(parent1).forEach(element => {
//     console.log(element);
// }); */
// parent1.appendChild(header);
// let link = document.createElement (`a`);
// link.setAttribute('href', 'https://codewithharry.com/');
// link.setAttribute('target', '_blank');
// console.log(link);
// link.innerText = "Click here to Visit";
// parent1.appendChild(link);








/* code from harry */

let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text)

// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(element)

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"