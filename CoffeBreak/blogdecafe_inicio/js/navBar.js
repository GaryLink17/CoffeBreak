const menuBtn = document.querySelector('#menu-btn');
const navLinks = document.querySelector('#navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        menuBtn.textContent = 'x';
        menuBtn.setAttribute('aria-expanded', 'true');
    } else {
        menuBtn.textContent = '≡';
        menuBtn.setAttribute('aria-expanded', 'false');
    }
})