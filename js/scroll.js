const upButton = document.querySelector('.up-button');

window.addEventListener('scroll', () => {
	if (window.scrollY >= 400) {
		upButton.classList.remove('display-none-scroll');
	} else {
		upButton.classList.add('display-none-scroll');
	}
});

upButton.addEventListener('click', ()=>{
	window.scrollTo ({
		top: 0,
		behavior: 'smooth'
	})
});