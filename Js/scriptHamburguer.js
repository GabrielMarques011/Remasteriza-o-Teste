/* função que abre o hamburger */
function toggleMenu() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    hamburger.classList.toggle('active');
}