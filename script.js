// Header menu
const menu = document.querySelector('.menu');

menu.addEventListener('click', event => {
  menu
    .querySelectorAll('.menu-item a')
    .forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

// Portfolio images
const portfolio = document.querySelector('.portfolio-grid');

portfolio.addEventListener('click', event => {
  portfolio
    .querySelectorAll('.portfolio-item img')
    .forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});
