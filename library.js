const library = []

function Book(title, author, num_pages, has_read) {
    this.title = title
    this.author = author
    this.pages = num_pages
    this.read = has_read
}

function addNewBook(title, author, num_pages, has_read) {
    const newBook = Book(title, author, num_pages, has_read)
    library.push(newBook)
}

function createBookCard(book){
    const grid = document.getElementById("library-grid")
    
    // TODO: Create Book element
    const bookCard = document.createElement("div");
    
    const book_title = document.createElement("h2")
    book_title.classList.add("book-title")
    book_title.innerHTML = book.title

    const book_author = document.createElement("span")
    book_author.classList("book-author")
    book_author.innerHTML = `Author: ${book.author}`;

    const book_pages = document.createElement("span")
    book_pages.classList.add("book-pages")
    book_pages.innerHTML = `${book.pages} pages`;

    const book_read = document.createElement("span")
    book_read.classList.add("book-read")
    book_read.innerHTML = book.read;

    const btn_group = document.createElement("div")

    const remove_book_btn = document.createElement("button")
    remove_book_btn.classList.add("remove-book-btn")
    remove_book_btn.innerHTML = "remove book"

    const read_status_btn = document.createElement("button")
    read_status_btn.classList.add("read_btn")
    read_status_btn.innerHTML = "toggle read status"

    //Assemble Book
    bookCard.appendChild(book_title);
    bookCard.appendChild(book_author);
    bookCard.appendChild(book_pages);
    bookCard.appendChild(book_read);
    btn_group.appendChild(remove_book_btn)
    btn_group.appendChild(read_status_btn)
    bookCard.appendChild(btn_group);
    
    // TODO: Add Book to grid
    grid.appendChild(bookCard);
}

const default_book = Book("Dwa","jayden",0,"no")
library.push(default_book)

for (const book in library.books) {
    createBookCard(book)
}