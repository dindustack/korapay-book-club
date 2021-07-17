const searchInput = document.querySelector(".form-control");
const suggestions = document.querySelector(".search-results");
// const everyBookCover = document.querySelector(".all-cover");
// const addBookCover = document.querySelector(".book-cover");

// Fetch books from data.json
const books = [];
fetch("./data.json")
  .then((blob) => blob.json())
  .then((data) => books.push(...data.books));

// check every character inputted in the search-form
function findMatches(wordToMatch, books) {
  return books.filter((book) => {
    const regex = new RegExp(wordToMatch, "gi");
    return book.title.match(regex) || book.author.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Display autocomplete character match for the book's title or author
function displayMatches() {
  const matchArray = findMatches(this.value, books);
  const html = matchArray
    .map((book) => {
      const regex = new RegExp(this.value, "gi");
      const bookName = book.title.replace(
        regex,
        `<span class="search-text">${this.value}</span>`
      );
      const authorName = book.author.replace(
        regex,
        `<span class="search-text">${this.value}</span>`
      );
      // if (bookName) {
      //   everyBookCover.classList.remove(".d-none");
      //   addBookCover.classList.remove(".d-none");
      // } else {
      //   everyBookCover.classList.add(".d-none");
      //   addBookCover.classList.add(".d-none");
      // }
      return `
        <li>
          <span>${bookName} - ${authorName}</span>
        </li>
      `;
    })
    .join("");
  suggestions.innerHTML = html;

  
}

// Event listeners for the input box
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
