// Header
const menu = document.querySelector('.menu');

menu.addEventListener('click', event => {
  menu
    .querySelectorAll('.menu-item a')
    .forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

// Portfolio. Взаимодействие с картинками
const portfolio = document.querySelector('.portfolio-grid');

portfolio.addEventListener('click', event => {
  portfolio
    .querySelectorAll('.portfolio-item img')
    .forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

// Get a quote
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (contactForm.checkValidity()) {
    const contactSubject = document
      .getElementById('contact-subject')
      .value.trim();
    const contactMessage = document
      .getElementById('contact-message')
      .value.trim();

    document.getElementById('info-subject').innerText = contactSubject
      ? 'Тема: ' + contactSubject
      : 'Без темы';
    document.getElementById('info-text').innerText = contactMessage
      ? 'Описание: ' + contactMessage
      : 'Без описания';
    document.getElementById('info-block').style.display = 'block';
  }
  contactForm.reset();
});

const okButton = document.getElementById('ok-button');

okButton.addEventListener('click', () => {
  document.getElementById('info-block').style.display = 'none';
  document.getElementById('info-subject').innerText = '';
  document.getElementById('info-text').innerText = '';
});
