// bookManager.js
export class AwesomeBookManager {
  constructor() {
    this.awesomeBooks = [];
    this.init();
  }

  init() {
    this.loadBooksFromLocalStorage();
    document
      .getElementById('add-btn')
      .addEventListener('click', this.addBook.bind(this));
    window.addEventListener('load', this.loadBooksFromLocalStorage.bind(this));
  }

  addBook() {
    const bookTitle = document.getElementById('bookTitle').value;
    const authorName = document.getElementById('authorName').value;
    const errorMessage = document.querySelector('.feedback');

    if (bookTitle.trim() === '' || authorName.trim() === '') {
      errorMessage.textContent = 'Add "Title" & "Author"';
      return;
    }

    const book = { title: bookTitle, author: authorName };
    this.awesomeBooks.push(book);

    document.getElementById('bookTitle').value = '';
    document.getElementById('authorName').value = '';
    this.updateBookList();
    this.saveBooksToLocalStorage();
  }

  removeBook(index) {
    this.awesomeBooks = this.awesomeBooks.filter((_, i) => i !== index);
    this.updateBookList();
    this.saveBooksToLocalStorage();
  }

  updateBookList() {
    const bookListing = document.getElementById('bookList');
    bookListing.innerHTML = '';

    if (this.awesomeBooks.length > 0) {
      bookListing.classList.add('list-border');
    } else {
      bookListing.classList.remove('list-border');
    }

    this.awesomeBooks.forEach((book, i) => {
      const listBookItem = document.createElement('li');
      listBookItem.classList.add('lists');
      listBookItem.textContent = `Title: ${book.title}, Author: ${book.author}`;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
      removeButton.id = `remove-button-${i}`;
      removeButton.addEventListener('click', () => {
        this.removeBook(i);
      });

      listBookItem.appendChild(removeButton);
      bookListing.appendChild(listBookItem);
    });
  }

  saveBooksToLocalStorage() {
    localStorage.setItem('awesomeBooks', JSON.stringify(this.awesomeBooks));
  }

  loadBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem('awesomeBooks');
    if (storedBooks) {
      this.awesomeBooks = JSON.parse(storedBooks);
      this.updateBookList();
    }
  }

  // method to display pages
  displayPage(pageName) {
    const pages = ['list-page', 'add-page', 'contact-page'];
    pages.forEach((page) => {
      const element = document.querySelector(`.${page}`);
      if (this.page === pageName) {
        this.element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  }
}

export function initializeBookManager() {
  const bookDirector = new AwesomeBookManager();
  return bookDirector;
}