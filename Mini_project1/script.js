let cartQuantity = 0;
let showCartQuantity = document.querySelector('.cartQuantity');
let addToCart = document.querySelector('.addToCart');
let add2 = document.querySelector('.add2');
let add3 = document.querySelector('.add3');
let reset = document.querySelector('.reset');
let display = document.querySelector('.display');

function updateCartQuantity(message) {
    display.textContent = `${message} ${cartQuantity}`;
}



