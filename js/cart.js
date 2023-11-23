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


// const totalPriceElement = document.querySelector('.total-price');
// const cartItemsList = document.querySelector('.cart-container-list');
// let totalPrice = 0;
// let totalItems = 0;
// const cartItems = {};

// function addToCart(event) {

//     const datasetContainer = event.currentTarget.closest('.yarn-img-container');

//     const itemName = datasetContainer.dataset.name;
//     const itemPrice = parseFloat(datasetContainer.dataset.price);


//     if (cartItems[itemName]) {

//         cartItems[itemName].quantity += 1;
//         cartItems[itemName].element.textContent = `${itemName} - ${itemPrice.toFixed(2)} NOK x ${cartItems[itemName].quantity}`;
//     } else {
 
//         const cartItem = document.createElement('li');
//         const yarnImg = datasetContainer.querySelector('.yarn-img').cloneNode(true);

//         cartItem.textContent = `${itemName} - ${itemPrice.toFixed(2)} NOK x 1`;

//         cartItemsList.appendChild(cartItem);
//         cartItem.classList.add('cart-item');

        
//         cartItem.appendChild(yarnImg);
//         yarnImg.style.width = '50px';

//         cartItems[itemName] = {
//             element: cartItem,
//             quantity: 1,
//             price: itemPrice,
//         };
//     }
    
//     totalPrice += itemPrice;
//     totalItems += 1;
//     updateCartCounter();
//     totalPriceElement.textContent = `Total ${calculateTotalPrice().toFixed(2)}`;
// }

// function calculateTotalPrice() {
//     let total = 0;
//     for (const itemName in cartItems) {
//         const item = cartItems[itemName];
//         total += item.quantity * item.price;
//     }
//     return total;
// }


function updateCartCounter() {
    const cartCounter = document.querySelector('.cart-add-count');

    cartCounter.classList.add('cart-animation');

    cartCounter.textContent = totalItems;

    cartCounter.addEventListener('animationend', function() {
        cartCounter.classList.remove('cart-animation');
    }, { once: true });
}

/////////////////////////

const addQuantity = (itemTitle) => {

    const cartItemNames = document.querySelectorAll('.cart-item-title');

    let quantityCount = 0;

    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === itemTitle) {
            quantityCount += 1

            const cartQuantityInput = cartItemNames[i].closest('.cart-row').querySelector('.cart-quantity-input');

            if (cartQuantityInput) {
                const currentQuantity = parseInt(cartQuantityInput.value, 10)
                cartQuantityInput.value = (currentQuantity + 1).toString();
                return;
            }
        }
    }
    return;
}

const addItemToCart = (itemTitle, itemPrice, itemImg) => {

    const cartItems = document.querySelector('.cart-items');

    const existingCartItem = [...document.querySelectorAll('.cart-item-title')].find((cartItem) => cartItem.innerText.toLowerCase() === itemTitle.toLowerCase()
    );

    if (existingCartItem) {
        addQuantity(itemTitle);
        return;
    }

    const cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');

    const cartItem = document.createElement('div');
    const cartItemImg = document.createElement('img')
    const cartItemTitle = document.createElement('span');
    const cartPrice = document.createElement('span');
    const cartQuantity = document.createElement('div');
    const cartQuantityInput = document.createElement('input');
    const removeButton = document.createElement('button');

    cartQuantityInput.type = 'number';
    cartQuantityInput.value = '0';
    
  
    cartItem.classList.add('cart-column');
    cartItemImg.classList.add('cart-item-img');
    cartItemImg.src = itemImg;
    cartItemTitle.classList.add('cart-item-title');
    cartItemTitle.innerText = itemTitle;
    cartPrice.classList.add('cart-price');
    cartPrice.innerText = itemPrice;
    cartQuantity.classList.add('cart-column');
    cartQuantity.classList.add('cart-quantity');
    cartQuantityInput.classList.add('cart-quantity-input');
    removeButton.classList.add('remove-button');
    removeButton.innerText = 'Remove';

    cartItems.append(cartRow);
    cartRow.append(cartItem);
    cartItem.append(cartItemImg);
    cartItem.append(cartItemTitle);
    cartRow.append(cartPrice);
    cartRow.append(cartQuantity);
    cartQuantity.append(cartQuantityInput);
    cartQuantity.append(removeButton);

    addQuantity(itemTitle);
    removeButton.addEventListener('click', removeCartItem);
    cartQuantityInput.addEventListener('change', quantityChanged);
}


const addToCartClicked = (event) => {
    const button = event.currentTarget;
    const shopItem = button.closest('.list-item');
    const itemTitle = shopItem.querySelector('.hover-title').innerText;
    const itemPrice = shopItem.querySelector('.item-price').innerText;
    const itemImg = shopItem.querySelector('.yarn-img').src;
 
    addItemToCart(itemTitle, itemPrice, itemImg);
    updateCartTotal();
}

const addToCartButton = document.querySelectorAll('.add-to-cart-button');

addToCartButton.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});




const updateCartTotal = () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartRows = document.querySelectorAll('.cart-row');
    let total = 0;

    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const priceElement = cartRow.querySelector('.cart-price');
        const quantityElement = cartRow.querySelector('.cart-quantity-input');
        const price = parseFloat(priceElement.textContent.replace(' NOK', ''));
        const quantity = quantityElement.value;
        total += (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    const totalTitle = document.querySelector('.cart-total-price');
    totalTitle.textContent = `${total} NOK`;
}

const quantityChanged = (event) => {
    const input = event.currentTarget;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

const removeCartItem = (event) => {
    const buttonClicked = event.currentTarget
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}


const ready = () => {
    const removeCartItemBtns = document.querySelectorAll('.remove-button');
    removeCartItemBtns.forEach(removeCartItemBtn => {
        removeCartItemBtn.addEventListener('click', removeCartItem)
    })

    const quantityInputs = document.querySelectorAll('.cart-quantity-input');
    quantityInputs.forEach(quantityInput => {
        quantityInput.addEventListener('change', quantityChanged);
    });
 }

 if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}