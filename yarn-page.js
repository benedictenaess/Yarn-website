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