// Header
const menu = document.querySelector('.menu');

menu.addEventListener('click', event => {
  menu
    .querySelectorAll('.menu-item a')
    .forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

// Slider. Переключение слайдов
const showSlides = n => {
  const slides = document.getElementsByClassName('slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
};

let slideIndex = 1;
showSlides(1);

const plusSlides = n => {
  showSlides((slideIndex += n));
};

const chevLeft = document.getElementById('chev-left');
const chevRight = document.getElementById('chev-right');

chevLeft.addEventListener('click', () => plusSlides(-1));
chevRight.addEventListener('click', () => plusSlides(1));

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
