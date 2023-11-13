const hamburgerButton = document.querySelector('.button-hamburger');
const headerActive = document.querySelector('.active-menu');

hamburgerButton.addEventListener('click', ()=>{
	headerActive.classList.toggle('active-menu-hide');
})