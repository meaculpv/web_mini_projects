// get access to DOM
const progressLine = document.getElementById('progress');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// check active circles
let currentActive = 1;

nextButton.addEventListener('click', () => {
    currentActive++;

    // set limit for var
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prevButton.addEventListener('click', () => {
    currentActive--;

    // set limit for var
    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

// update DOM
function update() {
    circles.forEach((circle, id) => {
        if (id < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    // calc the length of line to be filled
    progressLine.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    // enable and disable buttons
    if (currentActive === 1) {
        prevButton.disabled = true;
    } else if (currentActive === circles.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}