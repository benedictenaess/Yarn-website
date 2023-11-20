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
    });
});


