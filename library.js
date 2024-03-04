class Book{
    constructor(title, author, pages, read){
        this.title= title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor(){
        this.books = []
    }
    
    addBookToLibrary(book) {
        this.books.push(book)
    }
    removeFromLibrary(title) {
        this.books = this.books.filter((book) => book.title !== title)
    }
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

        const remove_book_btn = document.createElement("button")
        remove_book_btn.className = "remove-book-btn"
        remove_book_btn.innerHTML = "remove book"

        const read_status_btn = document.createElement("button")
        read_status_btn.className = "read_btn"
        read_status_btn.innerHTML = "toggle read status"

        //Assemble Book
        book.appendChild(book_title);
        book.appendChild(book_author);
        book.appendChild(book_pages);
        book.appendChild(book_read);
        book.appendChild(remove_book_btn)
        // TODO: Add Book to grid
        grid.appendChild(book);
    }
    
}

library_to_grid()