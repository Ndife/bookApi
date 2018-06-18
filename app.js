const fs = require('fs');

function Library(name){
this.name = name;
this.books = [];
}

function Book(name,author,year,id){
this.name = name;
this.author = author;
this.year = year;
this.id = id;
}

Library.prototype.getLibrary = function (){
   return JSON.parse(fs.readFileSync('./data.json','utf-8'));
}

Library.prototype.updatedLibrary = function (){
    return fs.writeFileSync('./data.json',JSON.stringify(this.books)); 
}
Library.prototype.addBook = function(book){
this.books.push(book);
this.updatedLibrary();
}

const book1 = new Book('kyle','may',2050,11);
const lib = new Library("Ndife's");
lib.addBook(book1);