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


//filter and sort

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

	listItemsContainer.textContent = '';
	
	filteredItems.forEach(item => {
		listItemsContainer.appendChild(item);
	});
}

filterButtons.forEach(filterButton => {
	filterButton.addEventListener('click', filterList);
});

const sortButtons = document.querySelectorAll('.sort-button')

let direction = -1;

const sortList = (event) => {
    const currentButton = event.currentTarget;

    if (direction === 1) {
        direction = -1;
    } else {
        direction = 1;
    }

    if (currentButton.dataset.sortBy === 'name'){
    const sortedItems = [...listItems].sort((a, b) => {
  
        const order = (a.dataset.name > b.dataset.name) ? 1 : -1;
  
        return order * direction;
    });
    
    listItemsContainer.textContent = '';
 
    sortedItems.forEach(item => {
        listItemsContainer.appendChild(item);
    });

    } else if (currentButton.dataset.sortBy === 'price'){
        const sortedItems = [...listItems].sort((a, b) => {
            const aAsNumber = parseInt(a.dataset.price);
            const bAsNumber = parseInt(b.dataset.price);

            const order = (aAsNumber > bAsNumber) ? 1 : -1;

            return order * direction; 
        });

        listItemsContainer.textContent = '';
    
        sortedItems.forEach(item => {
            listItemsContainer.appendChild(item);
        });
    }
}

sortButtons.forEach(sortButton => {
  sortButton.addEventListener('click', sortList);
});