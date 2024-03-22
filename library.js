// const library = []

class Library {
    constructor(){
        this.books = [];
    }
    toggleRead(index) {
        books[index].toggleRead()
        this.renderLibrary()
    }
    renderLibrary() {
        const libraryElement = document.querySelector("#library")
        libraryElement.innerHTML = ""
        for (let i = 0; i < this.books.length; i++) {
            const book = this.books[i];
            const bookCard = document.createElement("div")
            bookCard.innerHTML = `
                <h3 class="book-title">${book.title}</h3>
                <p class = "book-author">by ${book.author}</p>
                <p>${book.pages} pages</p>
                <p class="book-read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="toggle-read-btn" onclick ="toggleRead(${i})">Toggle Read Status</button>
                <button class="remove-btn" onclick="removeBook(${i})">Remove </button>
                `
            libraryElement.appendChild(bookCard)
        }    
    }
    addBookToLibrary() {
        // Getting The values from form
        const title = document.querySelector("#title").value
        const author = document.querySelector("#author").value
        const pages = document.querySelector("#pages").value
        const read = document.querySelector("#read").checked
        const newBook = new Book(title,author,pages,read)
        this.books.push(newBook)  
        this.renderLibrary()  
    }
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    toggleRead() {
        this.read = !this.read;
    }
}






function removeBook(index) {
    library.splice(index, 1)
    renderLibrary()
}


const addBookButton = document.querySelector("#add-book-btn")
addBookButton.addEventListener("click", function() {
    const newBookForm = document.querySelector("#new-book-form")
    newBookForm.style.display = "flex"
})

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
    event.preventDefault()
    addBookToLibrary()
})