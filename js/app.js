//header

const hamburgerButton = document.querySelector('.button-hamburger');
const headerActive = document.querySelector('.active-menu');


const openMenu = ()=>{
		headerActive.classList.toggle('active-menu-hide');
		cartContainer.classList.add('active-cart-hide');
}
hamburgerButton.addEventListener('click', openMenu);


const searchButton = document.querySelector('.button-search');
const searchIcon = document.querySelector('.header-search-icon');
const searchInput = document.querySelector('.header-search-input');

searchButton.addEventListener('click', () => {
	searchIcon.style.display = 'none';
	searchInput.style.display = 'block';
});

searchButton.addEventListener('mouseleave', () => {
	searchInput.style.display = 'none';
	searchIcon.style.display = 'block';
})

// cart container

const cartHeaderIcon = document.querySelector('.button-cart');
const cartContainer = document.querySelector('.cart-container');

const openCart = () => {
	cartContainer.classList.toggle('active-cart-hide');
	headerActive.classList.add('active-menu-hide');
}
cartHeaderIcon.addEventListener('click', openCart);

//header buttons

const logoBtn = document.querySelector('.button-logo');
const yarnBtn = document.querySelector('.yarn-button');
const patternBtn = document.querySelector('.home-button');
const aboutBtn = document.querySelector('.about-button');

logoBtn.addEventListener('click', ()=>{
	window.location.href = 'index.html';
});

yarnBtn.addEventListener('click', ()=>{
	window.location.href = 'yarn.html';
});

patternBtn.addEventListener('click', ()=>{
	window.location.href = 'index.html';
});

aboutBtn.addEventListener('click', ()=>{
	window.location.href = 'about.html';
});

//singup

const singupContainer = document.querySelector('.form-section');

const frontpageSignupPopup = () => {

	let timeoutId;

	const frontpageHeader = document.querySelector('.header-section');
	const frontpagePhotos = document.querySelector('.photo-collection');
	const frontpageTitle = document.querySelector('.frontpage-title-container');
	const frontpageSlideshow = document.querySelector('.slideshow');
	const singupContainer = document.querySelector('.form-section');

    document.addEventListener('DOMContentLoaded', () => {

        if (!sessionStorage.getItem('frontpageSignupFormDisplayed')) {
			frontpageSignupForm();
			sessionStorage.setItem('frontpageSignupFormDisplayed', true);
		}

		function frontpageSignupForm() {

			window.addEventListener('load', () => {
				timeoutId = setTimeout(() => {
					frontpageHeader.style.opacity = '0.5';
                    frontpagePhotos.style.opacity = '0.5';
                    frontpageTitle.style.opacity = '0.5';
                    frontpageSlideshow.style.opacity = '0.5';
                    singupContainer.style.opacity = '1'
                    singupContainer.style.display = 'block'
					document.body.style.overflow = 'hidden';
                }, 500);
            });
		}	
    });
	
	const signupToast = document.querySelector('.signup-toast')
	const signupText = document.querySelector('.signup-toast-text')
	const firstName = document.querySelector('#firstname');
	const lastName = document.querySelector('#lastname');
	
	const signupToastPopup = () => {
		signupToast.style.display = 'block'
		signupText.textContent = `Welcome ${firstName.value} ${lastName.value} to the gang!`
		signupToast.classList.add('signup-toast-animation');
		setTimeout(() => {
			signupToast.remove();
			frontpageHeader.style.opacity = '1';
			frontpagePhotos.style.opacity = '1';
			frontpageTitle.style.opacity = '1';
			frontpageSlideshow.style.opacity = '1';
			document.body.style.overflow = '';
		}, 3000);
	}

	const submitButton = document.querySelector('.signup-button');
	
	const signupSubmitForm = (event) => {
		event.preventDefault();
		clearTimeout(timeoutId);
		singupContainer.style.display = 'none';
		signupToastPopup();
		}
	submitButton.addEventListener('click', signupSubmitForm);

	const closePopup = document.querySelector('.form-close-icon');

	closePopup.addEventListener('click', (event) => {
		event.preventDefault();
		singupContainer.style.display = 'none';
		frontpageHeader.style.opacity = '1';
		frontpagePhotos.style.opacity = '1';
		frontpageTitle.style.opacity = '1';
		frontpageSlideshow.style.opacity = '1';
		document.body.style.overflow = '';
	});
};

frontpageSignupPopup();

//slideshow

const scrollContainer = document.querySelector('.slideshow-images-container');
const previousBtn = document.querySelector('.slideshow-previous-button');
const nextBtn = document.querySelector('.slideshow-next-button');

const scrollSpeed = 2;

const scrollSlideshow = ()=>{
	const containerChildren = Array.from(scrollContainer.children);
	scrollContainer.append(...containerChildren.map((child) => child.cloneNode(true)));

	scrollContainer.addEventListener('wheel', (e)=>{
		e.preventDefault();
		scrollContainer.scrollLeft += e.deltaY * scrollSpeed;
		scrollContainer.style.scrollBehavior = 'auto';

		if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2){
			scrollContainer.scrollLeft = 0;
		} else if (scrollContainer.scrollLeft <= 0) {
			scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
		}
	});
	
	nextBtn.addEventListener('click', ()=>{
		scrollContainer.style.scrollBehavior = 'smooth';
		scrollContainer.scrollLeft += 300;
		if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
			scrollContainer.scrollLeft = 0;
		}
	});
	
	previousBtn.addEventListener('click', ()=>{
		scrollContainer.style.scrollBehavior = 'smooth';
		scrollContainer.scrollLeft -= 300;
		if (scrollContainer.scrollLeft <= 0) {
			scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
		}
	});
}

scrollSlideshow();