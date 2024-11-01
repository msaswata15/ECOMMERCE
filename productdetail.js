// Change main product image on thumbnail click
document.querySelectorAll('.thumbnail img').forEach((thumbnail) => {
    thumbnail.addEventListener('click', function() {
        document.getElementById('mainProductImage').src = this.src;
    });
});

// Quantity increment and decrement
function increment() {
    let quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
}

function decrement() {
    let quantity = document.getElementById('quantity');
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
