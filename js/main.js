// const reviewsWrapper = document.getElementById('reviewsWrapper');
// let scrollAmount = 0;

// function moveRight() {
//     const scrollStep = reviewsWrapper.clientWidth / 2;
//     reviewsWrapper.scrollBy({
//         left: scrollStep,
//         behavior: 'smooth'
//     });
// }

// function moveLeft() {
//     const scrollStep = reviewsWrapper.clientWidth / 2;
//     reviewsWrapper.scrollBy({
//         left: -scrollStep,
//         behavior: 'smooth'
//     });
// }

const reviewsWrapper = document.getElementById('reviewsWrapper');

function moveRight() {
    const scrollStep = reviewsWrapper.clientWidth / 2;
    reviewsWrapper.scrollBy({
        left: scrollStep,
        behavior: 'smooth'
    });
}

function moveLeft() {
    const scrollStep = reviewsWrapper.clientWidth / 2;
    reviewsWrapper.scrollBy({
        left: -scrollStep,
        behavior: 'smooth'
    });
}
