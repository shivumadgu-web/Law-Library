const carousel = document.querySelector(".carousel");
const books = Array.from(document.querySelectorAll(".book"));

const title = document.getElementById("book-title");
const author = document.getElementById("book-author");

let current = Math.floor(books.length / 2);

function updateCarousel() {

    books.forEach(book => book.classList.remove("active"));

    books[current].classList.add("active");

    const activeBook = books[current];

    title.textContent = activeBook.dataset.title;
    author.textContent = activeBook.dataset.author;
}

function nextBook() {

    carousel.appendChild(books[0]);

    books.push(books.shift());

    updateCarousel();
}

function prevBook() {

    carousel.insertBefore(books[books.length - 1], books[0]);

    books.unshift(books.pop());

    updateCarousel();
}

document.querySelector(".next").addEventListener("click", nextBook);
document.querySelector(".prev").addEventListener("click", prevBook);

setInterval(nextBook, 2500);

updateCarousel();
