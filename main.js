const addBtn = document.getElementById("addBtn");
const confirmBtn = document.getElementById("confirmBtn");
const modal = document.getElementById("modal");
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const isRead = document.getElementById("isRead");

  myLibrary.push(
    new Book(title.value, author.value, pages.value, isRead.value)
  );
}

function displayBook() {
  myLibrary.forEach((key, index) => {
    const row = document.createElement("tr");
    row.dataset.id = index;

    Object.values(key).forEach((val) => {
      const cell = document.createElement("td");
      const content = document.createTextNode(val);
      cell.appendChild(content);
      row.appendChild(cell);
    });
    const cellBtn = document.createElement("td");
    const delBtn = document.createElement("button");
    delBtn.setAttribute("id", "delBtn");
    delBtn.textContent = `Remove`;
    delBtn.addEventListener("click", () => {
      removeBook(row.dataset.id);
      displayReset();
      displayBook();
    });

    cellBtn.appendChild(delBtn);
    row.appendChild(cellBtn);
    bookList.appendChild(row);
  });
}

function removeBook(data) {
  delete myLibrary[data];
}

function displayReset() {
  bookList.innerHTML = "";
}

addBtn.addEventListener("click", () => {
  bookForm.reset();
  modal.showModal();
});

confirmBtn.addEventListener("click", () => {
  addBookToLibrary();
  displayReset();
  displayBook();
});
