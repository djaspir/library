const addBtn = document.getElementById("addBtn");
const confirmBtn = document.getElementById("confirmBtn");

const modal = document.getElementById("modal");
const bookForm = document.getElementById("bookForm");

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const isRead = document.getElementById("isRead");

const bookList = document.getElementById("bookList");

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  const row = document.createElement("tr");

  row.dataset.id = myLibrary.length;

  myLibrary.push(
    new Book(title.value, author.value, pages.value, isRead.value)
  );

  Object.values(myLibrary[myLibrary.length - 1]).forEach((item) => {
    const cell = document.createElement("td");
    cell.textContent = item;
    row.appendChild(cell);
  });

  bookList.appendChild(row);
}

addBtn.addEventListener("click", () => {
  bookForm.reset();
  modal.showModal();
});

confirmBtn.addEventListener("click", () => {
  addBookToLibrary();
});
