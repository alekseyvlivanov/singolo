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

// Slider. Активация экранов телефонов
const iphoneVertical = document.getElementById('iphone-vertical');
const iphoneHorizontal = document.getElementById('iphone-horizontal');

const iphoneVerticalBlack = document.getElementById('iphone-vertical-black');
const iphoneHorizontalBlack = document.getElementById(
  'iphone-horizontal-black',
);

iphoneVertical.addEventListener('click', () => {
  if (iphoneVerticalBlack.style.display === 'block') {
    iphoneVerticalBlack.style.display = 'none';
  } else {
    iphoneVerticalBlack.style.display = 'block';
  }
});

iphoneHorizontal.addEventListener('click', () => {
  if (iphoneHorizontalBlack.style.display === 'block') {
    iphoneHorizontalBlack.style.display = 'none';
  } else {
    iphoneHorizontalBlack.style.display = 'block';
  }
});

// Portfolio. Взаимодействие с картинками
const portfolio = document.querySelector('.portfolio-grid');

portfolio.addEventListener('click', event => {
  portfolio
    .querySelectorAll('.portfolio-item img')
    .forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

// Portfolio. Переключение табов
const tags = document.getElementById('tags');
const portfolioItems = portfolio.getElementsByClassName('portfolio-item');

tags.addEventListener('click', event => {
  tags.querySelectorAll('.tag').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');

  for (const portfolioItem of portfolioItems) {
    portfolioItem.style.order = Math.floor(
      Math.random() * portfolioItems.length,
    );
  }
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
