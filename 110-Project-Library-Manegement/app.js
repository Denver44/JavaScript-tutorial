class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user) {
        if (this.issuedBooks[bookname] == undefined) {
            this.issuedBooks[bookname] = user;
        } else {
            console.log("This book is already issued!");
        }
    }

    returnBook(bookname) {
        delete this.issuedBooks[bookname];
    }
}


// let b1 = new Library(["C++", "C", "Python", "Java", "DSA BOOK"])
// b1.getBookList();
// b1.issueBook("C++","durgesh")
// b1.returnBook("C++")
// b1.issueBook("C++","durgesh")
// b1.issueBook("C++","durgesh")

myobj = {
    "name": "Durgesh"
}
console.log(myobj)
console.log(myobj["name2"] = "vishal")
console.log(myobj['name3'])