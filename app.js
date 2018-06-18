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
const book1 = new Book('kyle','may',2050,11);
const lib = new Library("Ndife's");
lib.addBook(book1);
//  console.log(lib.getBooks());