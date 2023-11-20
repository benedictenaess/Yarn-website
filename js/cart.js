//cart icon


const yarnCarts = document.querySelectorAll('.hover-display button');
const addToCartDisplays = document.querySelectorAll('.add-to-cart-display');


const addToCartIconDisplay = (index) => {
    addToCartDisplays[index].classList.remove('display-none');
    
    activeTimeout = setTimeout(() => {
        addToCartDisplays[index].classList.add('display-none');
    }, 400);             
}

yarnCarts.forEach((yarnCart, index) => {
    yarnCart.addEventListener('click', () => {
        addToCartIconDisplay(index);
        addToCart(event);
    });
});


//cart add


const totalPriceElement = document.querySelector('.total-price');
const cartItemsList = document.querySelector('.cart-container-list');
let totalPrice = 0;

function addToCart(event) {
    const datasetContainer = event.currentTarget.closest('.yarn-img-container');

    const itemName = datasetContainer.dataset.name;
    const itemPrice = parseFloat(datasetContainer.dataset.price);

    const cartItem = document.createElement('li');
    cartItem.textContent = `${itemName} - ${itemPrice.toFixed(2)} NOK`;

    cartItemsList.appendChild(cartItem);


    totalPrice += itemPrice;
    totalPriceElement.textContent = `Total ${totalPrice.toFixed(2)}`;
}