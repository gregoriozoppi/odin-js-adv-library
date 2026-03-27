function Book(title, author, pages, isRead = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.remove = function () {
    const index = myLibrary.findIndex(book => book.id === this.id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
};

Book.prototype.toggleReadStatus = function () {
    this.isRead = !this.isRead;
};

const myLibrary = [];

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// get addBook button and add event listener
const addBookButton = document.getElementById('addBook');
addBookButton.addEventListener('click', () => {
    const title = prompt('Enter book title:');
    const author = prompt('Enter book author:');
    const pages = parseInt(prompt('Enter number of pages:'), 10);
    const isRead = confirm('Have you read this book?');

    addBookToLibrary(new Book(title, author, pages, isRead));
    showLibrary();
});

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book';

    const title = document.createElement('h2');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const readStatus = document.createElement('p');
    readStatus.textContent = `Read: ${book.isRead ? 'Yes' : 'No'}`;

    const readButton = document.createElement('button');
    readButton.className = 'toggle-read';
    readButton.textContent = book.isRead ? 'Read' : 'Not read';

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-book';
    removeButton.textContent = 'Remove';

    // Add event listener to toggle read status    
    readButton.addEventListener('click', () => {
        book.toggleReadStatus();
        readButton.textContent = book.isRead ? 'Read' : 'Not read';
        readStatus.textContent = `Read: ${book.isRead ? 'Yes' : 'No'}`;
    });

    // Add event listener to remove book
    removeButton.addEventListener('click', () => {
        book.remove();
        showLibrary();
    });

    card.append(title, author, pages, readStatus, readButton, removeButton);
    return card;
}

function showLibrary() {
    const booksContainer = document.querySelector('.container');
    booksContainer.innerHTML = '';

    myLibrary.forEach((book) => {
        booksContainer.appendChild(createBookCard(book));
    });
}

addBookToLibrary(new Book('The Hobbit', 'J. R. R. Tolkien', 310, true));
addBookToLibrary(new Book('Atomic Habits', 'James Clear', 320, false));
addBookToLibrary(new Book('Dune', 'Frank Herbert', 412, true));

showLibrary();