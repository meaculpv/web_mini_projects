// get access to DOM objects
const cards = document.querySelectorAll('.card');

// remove active class name
function removeActiveCards() {
    cards.forEach(card => {
        card.classList.remove('active');
    });
}

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveCards();
        card.classList.add('active'); // add active class name
    })
});