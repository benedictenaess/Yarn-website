//header

const hamburgerButton = document.querySelector('.button-hamburger');
const headerActive = document.querySelector('.active-menu');


const openMenu = ()=>{
	hamburgerButton.addEventListener('click', ()=>{
		headerActive.classList.toggle('active-menu-hide');
	})
}

openMenu();

// const toggleMenu = () => {
//     headerActive.classList.toggle('active-menu-hide');
// };

// const openMenu = () => {
//     hamburgerButton.addEventListener('click', toggleMenu);
// };

//header buttons

const logoBtn = document.querySelector('.button-logo');
const yarnBtn = document.querySelector('.yarn-button');
const patternBtn = document.querySelector('.pattern-button');
const aboutBtn = document.querySelector('.about-button');

logoBtn.addEventListener('click', ()=>{
	window.location.href = 'index.html';
});

yarnBtn.addEventListener('click', ()=>{
	window.location.href = 'yarn.html';
});

patternBtn.addEventListener('click', ()=>{
	window.location.href = 'pattern.html';
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
        if (document.body.classList.contains('frontpage')) {

            window.addEventListener('load', () => {

                timeoutId = setTimeout(() => {
                    frontpageHeader.style.opacity = '0.5';
                    frontpagePhotos.style.opacity = '0.5';
                    frontpageTitle.style.opacity = '0.5';
                    frontpageSlideshow.style.opacity = '0.5';
                    singupContainer.style.opacity = '1'
                    singupContainer.style.display = 'block'
                    hamburgerButton.removeEventListener('click', toggleMenu);
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
		signupToast.classList.add('signup-toast-animation')
		setTimeout(() => {
			signupToast.remove();
			frontpageHeader.style.opacity = '1';
			frontpagePhotos.style.opacity = '1';
			frontpageTitle.style.opacity = '1';
			frontpageSlideshow.style.opacity = '1';
			// openMenu();
		}, 3000);
	}

	const submitButton = document.querySelector('.signup-button');
	
	const signupSubmitForm = (event) => {
		event.preventDefault();
		clearTimeout(timeoutId);
		singupContainer.style.display = 'none';
		signupToastPopup();
		}
	submitButton.addEventListener('click', signupSubmitForm)
};

// openMenu();
frontpageSignupPopup();

//Slideshow

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
