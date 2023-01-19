let menuOpen = false;
const button = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    if (!menuOpen) {
        menu.style.display = 'flex';
        menuOpen = true;
    } else {
        menu.style.display = 'none';
        menuOpen = false;
    }

})