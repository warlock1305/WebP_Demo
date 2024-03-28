
const bookscontainer = document.getElementById('AllBooks')
console.log(bookscontainer)

// Initial call to filterBooks to display all books
filterBooks(); // This will display all books initially

function filterBooks(genre = '') {
    $.get("../books.json", (data, status) => {
        const filteredBooks = data.filter(book => !genre || book.genre.includes(genre));
        displayBookCard(filteredBooks);
    });
}

function filterByDateG(date) {
    $.get("../books.json", function(books) {
        const filteredBooks = books.filter(book => {
            const bookDate = new Date(book.date);
            return !isNaN(bookDate) && bookDate > date;
        });
        displayBookCard(filteredBooks);
    });
}

function filterByDateL(date) {
    $.get("../books.json", function(books) {
        const filteredBooks = books.filter(book => {
            const bookDate = new Date(book.date);
            return !isNaN(bookDate) && bookDate < date;
        });
        displayBookCard(filteredBooks);
    });
}


function displayBookCard(filteredBooks) {
    // Display filtered books
    const bookscontainer = document.getElementById('AllBooks');
    bookscontainer.innerHTML = ''; // Clear previous books

    filteredBooks.forEach(book => {
        bookscontainer.innerHTML += `
            <div class="col mb-4">
                <div class="card book h-100">
                    <a href="1984.html">
                        <!-- Product image-->
                        <img class="card-img-top" src="${book.cover_image}" alt="${book.img_alt}" />
                        <!-- Product details-->
                    </a>
                    <div class="card-body p-2">
                        <div class="text-center">
                            <!-- Product name-->
                            <!-- Product price-->
                            Price ${book.price}$
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark mt-auto" href="#" onclick="incrementCartCounter()">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

// Function to increment the cart counter
function incrementCartCounter() {
    const cartCounter = document.querySelector('.badge');
    if (cartCounter) {
        const currentCount = parseInt(cartCounter.textContent) || 0;
        cartCounter.textContent = currentCount + 1;
    }
}

