//scroll up button

const upButton = document.querySelector('.up-button');

window.addEventListener('scroll', () => {
	if (window.scrollY >= 300) {
		upButton.classList.remove('display-none');
	} else {
		upButton.classList.add('display-none');
	}
});

upButton.addEventListener('click', ()=>{
	window.scrollTo ({
		top: 0,
		behavior: 'smooth'
	})
});