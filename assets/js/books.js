// Fetch books from data.json
async function getBooks() {
  try {
    const response = await fetch("/data.json");
    const data = await response.json();
    const books = data.books;

    return books;
  } catch (error) {
    console.log(error);
  }
}

// Load Books
const bookCover = document.querySelector(".book-cover");

window.addEventListener("DOMContentLoaded", async function () {
  const books = await getBooks();
  displayBookItems(books);
});


// Dispaly book items
const displayBookItems = (items) => {
  let displayBook = items.map(
    (book) => ` 
      
      <div class="book-card">
        <img src=${book.logo} alt="" class="book-card-image">
        <div class="book-card-body">
            <span class="h6 ${getBookStatus(book.status)}" id="book-status">${book.status}</span>
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
  );

  displayBook = displayBook.join("");
  if (bookCover) {
    bookCover.innerHTML = displayBook;
  }
};

// Change text-color of book status 
function getBookStatus(status) {
  if (status === "Available") {
    return "text-green";
  } else {
    return "text-red";
  }
}
