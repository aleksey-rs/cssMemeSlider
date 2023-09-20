const carouselWrapper = document.querySelector('.images__list');
const descriptionWrapper = document.querySelector('.images__desc-wrapper');
const carouselPagination = document.querySelectorAll(".carousel__item");
let active = 0;

//EVENTLISTENERS

window.addEventListener('resize', () => {
    carouselMove(active);
  });

carouselPagination.forEach( (dot, index) => {
    dot.addEventListener('click', () => {
        active = index;
        carouselMove(active);
        setStyles();
    });
});

function carouselMove(item) {
    const carouselItem = document.querySelector('.image__item');
    const carouselGap = parseInt(getComputedStyle(carouselWrapper).columnGap);
    const offset = carouselItem.clientWidth + carouselGap;
    const move = (offset * item)*0.75; 
    carouselWrapper.style.transform = `translateX(-${move}pt)`;
    carouselDescMove(item);
}

function carouselDescMove(item) {
    const descItem = document.querySelector('.image__desc');
    const descGap = parseInt(getComputedStyle(descriptionWrapper).columnGap);
    const offset = descItem.clientWidth + descGap;
    const move = (offset * item)*0.75; 
    descriptionWrapper.style.transform = `translateX(-${move}pt)`;
}

function setStyles() { 
    for(let dot of carouselPagination) {
        dot.querySelector('.pagination').classList.remove('action');
    }
    carouselPagination[active].querySelector('.pagination').classList.add('action');
}