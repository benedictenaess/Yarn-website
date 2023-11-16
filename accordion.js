const accordionToggles = document.querySelectorAll('.accordion-title');
const accordions = document.querySelectorAll('.accordion-container');

const displayAccordionContent = (accordion) => {
    accordion.classList.toggle('accordion-display');
}

const accordionDisplay = () => {
    accordionToggles.forEach((btn, index) => {
        btn.addEventListener('click', () => displayAccordionContent(accordions[index]));
    });
};

accordionDisplay();