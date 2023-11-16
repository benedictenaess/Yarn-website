const yarnImages = document.querySelectorAll('.yarn-img-container');
const hoverDisplays = document.querySelectorAll('.hover-display');

const toggleHover = (index, show) => {
  const display = hoverDisplays[index];
  if (show) {
    display.classList.remove('display-none');
  } else {
    display.classList.add('display-none');
  }
};

const hoverImg = () => {
  yarnImages.forEach((img, index) => {
    img.addEventListener('mouseover', () => {
      toggleHover(index, true);
    });

    img.addEventListener('mouseleave', () => {
      toggleHover(index, false);
    });
  });
};

hoverImg();


//filter

const filterButtons = document.querySelectorAll('.filter-button');
const listItems = document.querySelectorAll('.list-item'); 
const listItemsContainer = document.querySelector('.list-items');

const filterList = (event) => {
	const currentButton = event.currentTarget; 								
	const currentButtonFilterBy = currentButton.dataset.filterBy;   

	const filteredItems = [...listItems].filter(item => {
		if (currentButtonFilterBy === '*') {
			return true;
		} else {

			const splitTypes = item.dataset.type.split(',');	
			
			return splitTypes.includes(currentButtonFilterBy);		
		}
	});

  filterButtons.forEach(button => {
    button.style.backgroundColor = '';
  });

  currentButton.style.backgroundColor = '#E25E3E';

	listItemsContainer.innerHTML = '';
	
	filteredItems.forEach(item => {
		listItemsContainer.appendChild(item);
	});
}

filterButtons.forEach(filterButton => {
	filterButton.addEventListener('click', filterList);
});