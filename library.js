function Book(title, author, pages, read){
    this.title= title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function library_to_grid(){
    //TODO: Create grid based on size of 
    const grid = document.getElementById("library-grid")

    for (let i = 0; myLibrary.length(); i++) {
        // TODO: Create Book element
        const book = document.createElement("div");
        
        const book_title = document.createElement("h2")
        book_title.className = "book-title"
        book_title.innerHTML = myLibrary[i].title;

        const book_author = document.createElement("span")
        book_author.className = "book-author"
        book_author.innerHTML = `Author: ${myLibrary[i].author}`;

        const book_pages = document.createElement("span")
        book_pages.className = "book-pages"
        book_pages.innerHTML = `${myLibrary[i].pages} pages`;

        const book_read = document.createElement("span")
        book_read.className = "book-read"
        book_read.innerHTML = myLibrary[i].read;

        //Assemble Book
        book.appendChild(book_title);
        book.appendChild(book_author);
        book.appendChild(book_pages);
        book.appendChild(book_read);

        // TODO: Add Book to grid
        grid.appendChild(book);
    }
    
}