const yarnCarts = document.querySelectorAll('.hover-display button');
const addToCartDisplays = document.querySelectorAll('.add-to-cart-display');
let clickCount = 0;
const cartCounter = document.querySelector('.cart-add-count');

function updateCartCounter() {
    
    clickCount ++;

    cartCounter.textContent = clickCount;
    cartCounter.classList.add('cart-animation');
    
    cartCounter.addEventListener('animationend', function() {
        cartCounter.classList.remove('cart-animation');
    }, { once: true });
}


const addToCartIconDisplay = (index) => {
    addToCartDisplays[index].classList.remove('display-none');
    
    activeTimeout = setTimeout(() => {
        addToCartDisplays[index].classList.add('display-none');
    }, 400);   

}         

yarnCarts.forEach((yarnCart, index) => {
    yarnCart.addEventListener('click', () => {
        addToCartIconDisplay(index);
        updateCartCounter(); 
    });
});


const addQuantity = (itemTitle) => {

    const cartItemNames = document.querySelectorAll('.cart-item-title');

    let quantityCount = 0;

    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === itemTitle) {
            quantityCount += 1;

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

function purchaseClick () {
    const cartItems = document.querySelector('.cart-items');

    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }

    cartItems.innerText = 'Thank your for shopping with us!'
    updateCartTotal();  

    setTimeout(() => {
        cartItems.innerText = '';
        const cartContainer = document.querySelector('.cart-container');
        cartContainer.classList.add('active-cart-hide');
        clickCount = 0;
        cartCounter.textContent = '';

    }, 2000);
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

    const purchaseButton = document.querySelector('.purchase-button');
    purchaseButton.addEventListener('click', purchaseClick);
 }

 if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}