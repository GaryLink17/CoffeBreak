const menuBtn = document.querySelector('#menu-btn');
const navLinks = document.querySelector('#navLinks');

menuBtn.addEventListener('click', () => {
  const isActive = navLinks.classList.toggle('active');
  
  menuBtn.innerHTML = isActive ? "x" : "≡";
  menuBtn.setAttribute("aria-expanded", isActive);
});
