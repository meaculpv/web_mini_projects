const search = document.querySelector('.search');
const searchButton = document.querySelector('.btn');
const searchInput = document.querySelector('.input');

searchButton.addEventListener('click', () => {
    search.classList.toggle('active');
    searchInput.focus();
});