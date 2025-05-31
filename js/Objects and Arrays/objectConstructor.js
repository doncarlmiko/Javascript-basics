function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (this.read=== true) {
            return `${this.title} by ${this.author}, ${this.pages} pages, read`;
        }
        else {
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
        }
    }
}
const read = true; 
const notRead = false; 
const reader = read ? 'read' : 'not read';

// Creating instances of the Books constructor
const book1= new Books('The Hobbit', 'J.R.R. Tolkien', 295, read);
const book2= new Books('The Lord of the Rings', 'Don Quirante', 1178, notRead);

// Adding a method to the Books prototype
Books.prototype.getAuthor = function() {
    return '' + this.author + '\'s book';
}

book1.getAuthor();
book2.getAuthor();
console.log(book1.getAuthor());
console.log(book2.getAuthor());

console.log(book1.info());
console.log(book2.info());

