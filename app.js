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


// const frontpageSignupPopup = () = {
// 	document.addEventListener('DOMContentLoaded', () => {
// 		if (document.body.classList.contains('frontpage')) {

// 		window.addEventListener('load', ()=>{
// 			const frontpageHeader = document.querySelector('.header-section')
// 			const frontpagePhotos = document.querySelector('.photo-collection');
// 			const frontpageTitle = document.querySelector('.frontpage-title-container');
// 			const frontpageSlideshow = document.querySelector('.slideshow');
// 			setTimeout(() => {
// 				frontpageHeader.style.opacity = '0.5'
// 				frontpagePhotos.style.opacity = '0.5'
// 				frontpageTitle.style.opacity = '0.5'
// 				frontpageSlideshow.style.opacity = '0.5'
// 				singupContainer.style.opacity = '1'
// 				headerHamburger(stop);
// 			}, 1000);
// 		})
// 	}
// }
// }
// frontpageSignupPopup()

const frontpageSignupPopup = () => {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.body.classList.contains('frontpage')) {

            window.addEventListener('load', () => {
                const frontpageHeader = document.querySelector('.header-section');
                const frontpagePhotos = document.querySelector('.photo-collection');
                const frontpageTitle = document.querySelector('.frontpage-title-container');
                const frontpageSlideshow = document.querySelector('.slideshow');
                const singupContainer = document.querySelector('.form-section');

                setTimeout(() => {
                    frontpageHeader.style.opacity = '0.5';
                    frontpagePhotos.style.opacity = '0.5';
                    frontpageTitle.style.opacity = '0.5';
                    frontpageSlideshow.style.opacity = '0.5';
                    singupContainer.style.opacity = '1'
                    headerHamburger();
                }, 1000);
            });
        }
    });
};
frontpageSignupPopup();

const submitButton = () => {
	preventdefault()
}