

/* ToDos 
1. Store to local storage
2. Delete option 
*/ 


// constructor 

/* function Book (name, author, type) {
    this.name = name,
    this.author = author,
    this.type =type
}

// Display constructor

function Display () {
    
}

// add methods to display prototype

Display.prototype.validate = function(book) {
    if(book.name.length < 4 && book.name.length < 4) {
        return false;
    }
    else {return true}
}

Display.prototype.add = function(book) 
    let tableBody = document.getElementById("tableBody");
    let uiString = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>
    `
    tableBody.innerHTML += uiString;
}

Display.prototype.show = function(type, alertMsg) {
    let message = document.getElementById("message");
    message.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>Message:</strong> ${alertMsg}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `
    setTimeout(function() {
       message.innerHTML = ""; 
    }, 2500);
}


Display.prototype.clear = function() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}


//  Add submit event listeener to form

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    

    e.preventDefault();
    let name = document.getElementById("bookName").value; 
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    if (fiction.checked) {type = fiction.value}
    else if (programming.checked) {type = programming.value}
    else {type = cooking.value}
    let book =  new Book(name, author, type)

    let display = new Display(); 
    

    if (display.validate(book) == true){
        display.add(book);
        display.show("success", "Your book has been added");
    }
    else {
        display.show("danger", "Sorry you can not add this book");
    }
    display.clear();

} */

/* do it through ES6 */

class Book  {
    constructor(name, author, type){
        this.name = name,
        this.author = author,
        this.type =type
    }
}

// Display constructor

class Display {
    
    // add methods to display prototype

    validate(book) {
        if(book.name.length < 4 || book.author.length < 4) {
            return false;
        }
        else {return true}
    }

    

    add(book) {
        let existingBooks = Display.load() || [];
        existingBooks.push(book);
        localStorage.setItem("storedBooks", JSON.stringify(existingBooks));
        let tableBody = document.getElementById("tableBody");
        let uiString = "";
        existingBooks.forEach(function (element, index){
            uiString += `
            <tr>
                <td>${element.name}</td>
                <td>${element.author}</td>
                <td>${element.type}</td>
                <td><button id="${index}" onclick="Display.deleteBook(this.id)" type="button" class="btn btn-outline-danger">Delete</button></td>
            </tr>
        `
        });        
        tableBody.innerHTML = uiString;
    }

    show(type, alertMsg) {
        let message = document.getElementById("message");
        message.innerHTML = `
                <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>Message:</strong> ${alertMsg}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `
        setTimeout(function() {
           message.innerHTML = ""; 
        }, 5000);
    }   

    /* load existing books */
    static load() {
        let existingBooks = JSON.parse(localStorage.getItem("storedBooks")) || [];
        localStorage.setItem("storedBooks", JSON.stringify(existingBooks));
        let tableBody = document.getElementById("tableBody");
        let uiString = "";
        // console.log(existingBooks[1]);
        existingBooks.forEach(function (element, index){
            uiString += `
            <tr>
                <td>${element.name}</td>
                <td>${element.author}</td>
                <td>${element.type}</td>
                <td><button id="${index}" onclick="Display.deleteBook(this.id)" type="button" class="btn btn-outline-danger">Delete</button></td>
            </tr>
        `
        }); 
        tableBody.innerHTML = uiString;
        return existingBooks;
    }
    
    /* delete a book, since object is created after the click, adding this as a global function */

    static deleteBook(index) {
        let existingBooks = JSON.parse(localStorage.getItem("storedBooks")) || [];
        let dummyDisplay = new Display();
        dummyDisplay.show("danger", "Your note has been deleted!");
        existingBooks.splice(index, 1);
        localStorage.setItem("storedBooks", JSON.stringify(existingBooks));
        Display.load();
    }
    
    
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }   
}

//  Add submit event listeener to form

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
Display.load();





/* on form submit */

function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById("bookName").value; 
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    if (fiction.checked) {type = fiction.value}
    else if (programming.checked) {type = programming.value}
    else {type = cooking.value}
    let book =  new Book(name, author, type)

    let display = new Display(); 
    

    if (display.validate(book) == true){
        display.add(book);
        display.show("success", "Your book has been added");
    }
    else {
        display.show("warning", "Sorry you can not add this book");
    }
    display.clear();

}




