console.log("hello index.js");

class Library {
  constructor(booklist) {
    this.booklist1 = booklist;
    this.issuedBooks = {};
  }

  getBookList() {
    this.booklist1.forEach((element) => {
      console.log(element);
    });
  }

  issueBook(bookname, user) {
    if (this.issuedBooks[bookname] == undefined) {
      this.issuedBooks[bookname] = user;
    } else {
      console.log("book already issued");
    }
  }

  returnBook(bookname) {
    delete this.issuedBooks[bookname];
  }
}
