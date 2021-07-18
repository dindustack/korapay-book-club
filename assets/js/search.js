const searchInput = document.querySelector(".form-control");
const suggestions = document.querySelector(".search-results");
const mobileSearchInput = document.querySelector(".mobile-form-control");
const mobileSuggestions = document.querySelector(".mobile-search-results");
const searchIcon = document.querySelector(".search-icon");
const mobileSearchIcon = document.querySelector(".mobile-search-icon");
const mobileNavbar = document.querySelector(".mobile-navbar");
const headerArrow = document.querySelector(".header-arrow");
const navbar = document.querySelector(".navbar")
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
  mobileSuggestions.innerHTML = html;
}

// Event listeners for the input box (desktop view)
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

// Event listeners for the input box (mobile view)
mobileSearchInput.addEventListener("change", displayMatches);
mobileSearchInput.addEventListener("keyup", displayMatches);
mobileSearchInput.addEventListener("input", (e) => {
  const textResult = e.target.value;
  if (textResult === "") {
    mobileSuggestions.classList.add("d-none");
  } else {
    mobileSuggestions.classList.remove("d-none");
  }
});

// Search input for mobile view
// Open search input
mobileSearchIcon.addEventListener("click", () => {
  mobileNavbar.classList.remove("d-none");
  navbar.classList.add("d-none");
});

// Close search input
headerArrow.addEventListener("click", () => {
  mobileNavbar.classList.add("d-none");
  navbar.classList.remove("d-none");});
