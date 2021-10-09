/* Problem Statement:-
Create a library class and implement the following:

Create a constructor that takes the book list as an argument.
getBookList(): This function should return the list of all book present in the library.
issueBook(bookname, user): This function takes an argument of bookname and user, in bookname, we specify the name of the book, and in user, we specify the name of the user. This function will issue the book to the user.
returnBook(bookname): This function will take one argument, which is the name of the book. The purpose of this function is to remove the book from the users borrowed book data. It is totally up to you how you implement it. */

console.log("Librabry clas excersice 4");

// My own solution

class Library {
    constructor (givenBookList) {
        this.bookList = givenBookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName,user) {
        if(this.issuedBooks[bookName] == undefined){
            this.issuedBooks[bookName] = user;
        }
        else {
            console.log("This book is already issued")
        }
        console.log(`Said book issued, updated list of issued books. ${Object.keys(this.issuedBooks)}`)
    }

    returnBook(bookName) {
        delete this.issuedBooks[bookName];
        if(Object.keys(this.issuedBooks).length != 0){
            console.log(`Said book returned, updated list of issued books. ${Object.keys(this.issuedBooks)}`);
        }
        else {
            console.log("All books have been returned. No issued books as of now.")
        }
    }
}

let lib1 =  new Library(["Legend Hamza", "Harry Potter", "Psych of Money"]);
lib1.issueBook("Legend Hamza", "Chhotu");
lib1.issueBook("Harry Potter", "Chhotu");
lib1.issueBook("Harry Potter", "Late Lateef");
lib1.returnBook("Legend Hamza");
lib1.returnBook("Harry Potter");