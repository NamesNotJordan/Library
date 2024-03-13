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
}

const addBookButton = document.querySelector("#add-book-btn")
addBookButton.addEventListener("click", function() {
    const newBookForm = document.querySelector("#new-book-form")
    newBookForm.style.display = "block"
})