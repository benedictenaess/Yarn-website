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
const sortButtons = document.querySelectorAll('.sort-button');

let currentFilter = '*';
let direction = -1;

const filterList = (event) => {
	const currentButton = event.currentTarget; 								
	const currentButtonFilterBy = currentButton.dataset.filterBy;   

    currentFilter = currentButtonFilterBy;

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

    if (currentButtonFilterBy === '*') {
        sortButtons.forEach(button => {
            button.style.backgroundColor = '';
        });
    }

    currentButton.style.backgroundColor = '#E25E3E';

    sortAndRenderList(filteredItems);

}

filterButtons.forEach(filterButton => {
	filterButton.addEventListener('click', filterList);
});


const sortList = (event) => {
    const currentButton = event.currentTarget;

    if (direction === 1) {
        direction = -1;
    } else {
        direction = 1;
    }

    const sortBy = currentButton.dataset.sortBy;

    const sortedItems = [...listItems].sort((a, b) => {
        if (sortBy === 'name') {
            
        const order = (a.dataset.name > b.dataset.name) ? 1 : -1;
        return order * direction;

        } else if (sortBy === 'price') {
                const aAsNumber = parseInt(a.dataset.price);
                const bAsNumber = parseInt(b.dataset.price);
    
                const order = (aAsNumber > bAsNumber) ? 1 : -1;
                return order * direction; 
        }

    });
    sortButtons.forEach(button => {
        button.style.backgroundColor = '';
    });

    currentButton.style.backgroundColor = '#E25E3E';
    
    sortAndRenderList(sortedItems);
}   

sortButtons.forEach(sortButton => {
  sortButton.addEventListener('click', sortList);
});

function sortAndRenderList(items) {
    const filteredAndSortedItems = items.filter(item => {
        if (currentFilter === '*') {
            return true;
        } else {
            const splitTypes = item.dataset.type.split(',');
            return splitTypes.includes(currentFilter);
        }
    });

    listItemsContainer.textContent = '';

    filteredAndSortedItems.forEach(item => {
        listItemsContainer.appendChild(item);
    })
}