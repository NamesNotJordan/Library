const library = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
function addBookToLibrary() {
    // Getting The values from form
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const pages = document.querySelector("#pages").value
    const read = document.querySelector("#read").checked
    const newBook = new Book(title,author,pages,read)
    library.push(newBook)  
    renderLibrary()  
}

function renderLibrary() {
    const libraryBooks = document.querySelector("#library")
    libraryBooks.innerHTML = ""
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        const bookCard = document.createElement("div")
        bookCard.innerHTML = `
            <h3 class="book-title>${book.title}</h3>
            <p class = "book-author">by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p class="book-read-status">${book.read ? "Read" : "Not Read Yet"}</p>
            <button> class="remove-btn" onclick="removeBook(${i})
            `
        libraryBooks.appendChild(bookCard)
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