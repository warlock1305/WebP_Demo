const bookscontainer = document.getElementById('AllBooks')
console.log(bookscontainer)
/// fetch
// populate container
$.get("../books.json", (data, status) => {

    data.forEach(book => {
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
                        <a class="btn btn-outline-dark mt-auto" href="#">Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>`
    }) 

});

const bookpage = 
function Bookpage(){
    $.get("../books.json", (data, status) =>{

    })
}