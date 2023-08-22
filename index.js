// index.js
import { initializeBookManager } from './modules/bookManager.js';
import setInitialTime from './modules/datetime.js';
import './modules/navigation.js';

const bookDirectorWithId = initializeBookManager();
bookDirectorWithId.updateBookList();

document.addEventListener('DOMContentLoaded', () => {
  initializeBookManager();
  setInitialTime();
});

// Load data from localStorage when the window is loaded
window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('bookData'));
  if (data) {
    this.titleName.value = data.titleName;
    this.nameOfAuthor.value = data.nameOfAuthor;
  }
});

// Hide and show elements for navigation
const addBooks = document.querySelector('.form');
const contact = document.querySelector('.contact');
const listPage = document.querySelector('.list-page');

addBooks.style.display = 'none';
contact.style.display = 'none';
listPage.classList.add('active');
