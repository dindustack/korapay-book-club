const searchInput = document.querySelector(".form-control");
const suggestions = document.querySelector(".search-results");
const searchIcon = document.querySelector(".search-icon");
const everyBookCover = document.querySelector(".all-cover");
const addBookCover = document.querySelector(".book-cover");

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
searchInput.addEventListener("input", (e) => {
  const textResult = e.target.value;
  if (textResult === "") {
    suggestions.classList.add("d-none");
  } else {
    suggestions.classList.remove("d-none");
  }
});
