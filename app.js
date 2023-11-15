//header

const hamburgerButton = document.querySelector('.button-hamburger');
const headerActive = document.querySelector('.active-menu');

const headerHamburger = ()=>{
	hamburgerButton.addEventListener('click', ()=>{
		headerActive.classList.toggle('active-menu-hide');
	})
}
headerHamburger();

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
                    headerHamburger();
                }, 1000);
            });
        }
    });
	
	
	const signupToast = document.querySelector('.signup-toast')
	
	const signupToastPopup = () => {
		signupToast.style.display = 'block'
		signupToast.classList.add('signup-toast-animation')
		setTimeout(() => {
			signupToast.remove();
			frontpageHeader.style.opacity = '1';
			frontpagePhotos.style.opacity = '1';
			frontpageTitle.style.opacity = '1';
			frontpageSlideshow.style.opacity = '1';
		}, 2500);
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
frontpageSignupPopup();
