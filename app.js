const fs = require('fs');

function Library(name){
this.name = name;
this.books = [];
}

function Book(name,author,year,id,borrow){
this.name = name;
this.author = author;
this.year = year;
this.id = id;
this.borrow = borrow;
}

Library.prototype.getLibrary = function (){
   return JSON.parse(fs.readFileSync('./data.json','utf-8'));
}

Library.prototype.updatedLibrary = function (){
    return fs.writeFileSync('./data.json',JSON.stringify(this.books)); 
}

Library.prototype.addBook = function(book){
this.books = this.getLibrary();
cbook = this.books.filter((b)=>book.id===b.id);
    if(cbook==false){
    this.books.push(book);
    this.updatedLibrary();
    }else{
        console.log('book already exist with the ID');
    }
}

Library.prototype.getBooks = function(){
    return this.getLibrary();
}

Library.prototype.getBookById = function (id){
    this.books = this.getLibrary();
    let book = this.books.filter((book)=>book.id==id);
    return book;
}

Library.prototype.getBookByIndex = function(id){
    this.books = this.getLibrary();
    for(let i in this.books){
        if(this.books[i].id ===id){
            return i;
        }
    }
}

Library.prototype.deleteBook = function(id){
let bookIndex = this.getBookByIndex(id);
    if(bookIndex){
    this.books.splice(bookIndex,1);
    this.updatedLibrary();
    }
}


Library.prototype.updateBook = function(id,updateBook){
bookIndex = this.getBookByIndex(id); 
this.books[bookIndex] = updateBook;
this.updatedLibrary();
}

Library.prototype.getBookByParam = function(param,value){
let book = this.getLibrary();
let books = [];
    for(let i=0; i<book.length; i++){
        if(book[i][param]===value){
            books.push(book[i]); 
        }
    }
    return books;
}

Library.prototype.borrowBook = function(id){
let bookIndex = this.getBookByIndex(id);
let borrowBook = this.books[bookIndex];
if(borrowBook.borrow){
console.log('book not available');
}else {
    console.log('book borrowed successfully');
    borrowBook.borrow = true;
    this.updatedLibrary();
}
}

const book1 = new Book('kyle','may',2050,11);
const book2 = new Book('men','bro',2026,243);
const lib = new Library("Ndife's");
// lib.addBook(book1);
// lib.updateBook(24,book2);
// console.log(lib.getBooks());
lib.borrowBook(23);
