const searchInput = document.querySelector(".form-control");
const suggestions = document.querySelector(".search-results");
const recAddSection = document.querySelector(".book-cover");
const allBookSection = document.querySelector(".all-cover");
const mobileSearchInput = document.querySelector(".mobile-form-control");
const mobileSuggestions = document.querySelector(".mobile-search-results");
const searchIcon = document.querySelector(".search-icon");
const mobileSearchIcon = document.querySelector(".mobile-search-icon");
const mobileNavbar = document.querySelector(".mobile-navbar");
const headerArrow = document.querySelector(".header-arrow");
const navbar = document.querySelector(".navbar");
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
  const filterBookSections = findMatches(this.value, books);
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

  // Filter out book items based on text in search box
  const filteredBookSection = filterBookSections
    .map(
      (book) => `  
  <div class="book-card">
    <img src=${book.logo} alt="" class="book-card-image">
    <div class="book-card-body">
        <span class="h6 ${getBookStatus(book.status)}" id="book-status">${
        book.status
      }</span>
        <h5 class="book-card-title mt-2">${book.title}</h5>
        <span class="h6">${book.author} - ${book.year}</span>
        <h6>${book.genre}</h6>
        <div class="book-card-stats">
            <div class="ratings">
              <span class="h6">Ratings: 4.0</span>
              <div>
                <img src="./assets/images/star-full.svg" alt="">
                <img src="./assets/images/star-full.svg" alt="">
                <img src="./assets/images/star-full.svg" alt="">
                <img src="./assets/images/star-full.svg" alt="">
                <img src="./assets/images/star-empty.svg" alt="">
              </div>
            </div>
            <div class="book-likes mr-2"></div>
            <div class="mr-2">
            <h6 class="mb-0"><img src="./assets/images/user.svg" alt=""></h6>
            <span class="h6">${book.users}</span>

            </div>
            <div>
            <h6 class="mb-0"><img src="./assets/images/love.svg" alt=""></h6>
            <span class="h6">${book.likes}</span>

            </div>
            
        </div>
    </div>
  </div>
  `
    )
    .join("");
  recAddSection.innerHTML = filteredBookSection;
  allBookSection.innerHTML = filteredBookSection;
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
  navbar.classList.remove("d-none");
});
