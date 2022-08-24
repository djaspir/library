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

function removeBook(data) {
  delete myLibrary[data];
}

function displayReset() {
  bookList.innerHTML = "";
}

function readValue(data) {
  if (data.checked) {
    return true;
  } else {
    return false;
  }
}

function readButtonValue(data) {
  if (data === true) {
    return "Already Read";
  } else {
    return "Not Yet Read";
  }
}

function addBookToLibrary() {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const isRead = document.getElementById("isRead");
  console.log(isRead.checked);

  myLibrary.push(
    new Book(title.value, author.value, pages.value, readValue(isRead))
  );
}

function displayBook() {
  myLibrary.forEach((key, index) => {
    const row = document.createElement("tr");
    row.dataset.id = index;

    Object.values(key).forEach((val) => {
      const cell = document.createElement("td");
      // TOGGLE READ BUTTON
      if (typeof val === "boolean") {
        const readBtn = document.createElement("button");
        readBtn.setAttribute("id", "readBtn");
        readBtn.textContent = readButtonValue(val);
        cell.appendChild(readBtn);
        row.appendChild(cell);
        readBtn.addEventListener("click", (e) => {
          myLibrary[row.dataset.id].isRead = !myLibrary[row.dataset.id].isRead;
          readBtn.textContent = readButtonValue(
            myLibrary[row.dataset.id].isRead
          );
        });
        return;
      }

      const content = document.createTextNode(val);
      cell.appendChild(content);
      row.appendChild(cell);
    });
    // REMOVE BUTTON
    const cellDelBtn = document.createElement("td");
    const delBtn = document.createElement("button");
    delBtn.setAttribute("id", "delBtn");
    delBtn.textContent = `Remove`;
    delBtn.addEventListener("click", () => {
      removeBook(row.dataset.id);
      displayReset();
      displayBook();
    });

    cellDelBtn.appendChild(delBtn);
    row.appendChild(cellDelBtn);
    bookList.appendChild(row);
  });
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
