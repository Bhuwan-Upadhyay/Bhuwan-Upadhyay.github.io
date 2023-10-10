function toggleMenu() {
  const menu = document.querySelector('.nav');
  menu.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
