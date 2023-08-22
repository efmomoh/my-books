// navigation.js
const bookListing = document.getElementById('bookList');
const addPage = document.querySelector('.add-page');
const contactPage = document.querySelector('.contact-page');

const listPage = document.querySelector('.list-page');
const addBooks = document.querySelector('.form');
const contact = document.querySelector('.contact');

listPage.addEventListener('click', (e) => {
  e.preventDefault();
  bookListing.style.display = 'block';
  addBooks.style.display = 'none';
  contact.style.display = 'none';
  listPage.classList.add('active');
  addPage.classList.remove('active');
  contactPage.classList.remove('active');
});

addPage.addEventListener('click', (e) => {
  e.preventDefault();
  addBooks.style.display = 'block';
  bookListing.style.display = 'none';
  contact.style.display = 'none';
  addPage.classList.add('active');
  listPage.classList.remove('active');
  contactPage.classList.remove('active');
});

contactPage.addEventListener('click', (e) => {
  e.preventDefault();
  contact.style.display = 'block';
  bookListing.style.display = 'none';
  addBooks.style.display = 'none';
  contactPage.classList.add('active');
  listPage.classList.remove('active');
  addPage.classList.remove('active');
});
