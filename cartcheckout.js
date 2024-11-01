document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const cartTotalElement = document.querySelector('.cart-summary p');
    const updateCartButton = document.querySelector('.update-cart');
    const checkoutButton = document.querySelector('.checkout');

    // Function to calculate and update the cart total
    function updateCartTotal() {
        let cartTotal = 0;

        cartItems.forEach(item => {
            const priceElement = item.querySelector('.price');
            const quantityElement = item.querySelector('.quantity select');
            const subtotalElement = item.querySelector('.subtotal');

            const price = parseFloat(priceElement.textContent.replace('$', ''));
            const quantity = parseInt(quantityElement.value);
            const subtotal = price * quantity;

            subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
            cartTotal += subtotal;
        });

        cartTotalElement.textContent = `Subtotal: $${cartTotal.toFixed(2)}`;
    }

    // Attach event listeners to quantity dropdowns
    cartItems.forEach(item => {
        const quantitySelect = item.querySelector('.quantity select');
        quantitySelect.addEventListener('change', updateCartTotal);
    });

    // Initial calculation of cart total
    updateCartTotal();

    // Event listener for "Update Cart" button
    updateCartButton.addEventListener('click', () => {
        alert("Cart updated!");
    });

    // Event listener for "Proceed to Checkout" button
    checkoutButton.addEventListener('click', () => {
        alert("Proceeding to checkout...");
        // Add redirect or other actions for checkout here
    });
});
