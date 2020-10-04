// Book Shelf
// Create a Book constructor that has two properties :
class Book {
  constructor(title, author){
// Title
// Author
    this.title = title;
    this.author = author;
  }
// A method named getTitle that returns: "Title: " + the instance title.
  getTitle() {
    return `Title: ${this.title}`
  }

  getAuthor(){
    return `Author: ${this.author}`
  }
// A method named getAuthor that returns: "Author: " + the instance author.
// and instantiate this constructor by creating 3 new books:
}
// and two methods:
// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.

PP = new Book("Pride and Prejudice", "Jane Austen");
H = new Book("Hamlet", "William Shakespeare");
WP = new Book("War and Peace", "Leo Tolstoy");
console.log(PP.title);
console.log(PP.author);
console.log(PP.getTitle());
console.log(PP.getAuthor());
// For instance, if I instantiated the following book using this Book constructor function:

// Harry Potter - J.K. Rowling (HP)
// I would get the following properties and methods:

// Examples
// HP.title ➞ "Harry Potter"
// HP.author ➞ "J.K. Rowling"
// HP.getTitle() ➞ "Title: Harry Potter"
// HP.getAuthor() ➞ "Author: J.K. Rowling"

// NOTE: Remember, after you've finished writing the constructor function, you must instantiate it through the creation of new objects.