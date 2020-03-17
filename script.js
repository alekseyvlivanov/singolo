// Header
const menuItems = document.querySelectorAll('.menu a');

for (const menuItem of menuItems) {
  menuItem.addEventListener('click', event => {
    menuItems.forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
  });
}

// Slider. Переключение слайдов
const showSlides = n => {
  const slides = document.querySelectorAll('.slide');
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

// Portfolio. Переключение табов
const tags = document.querySelectorAll('.tag');
const portfolioItems = document.querySelectorAll('.portfolio-item');

for (const tag of tags) {
  tag.addEventListener('click', event => {
    tags.forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');

    portfolioItems.forEach(
      el =>
        (el.style.order = Math.floor(Math.random() * portfolioItems.length)),
    );
  });
}

// Portfolio. Взаимодействие с картинками
const portfolioImages = document.querySelectorAll('.portfolio-item img');

for (const portfolioImage of portfolioImages) {
  portfolioImage.addEventListener('click', event => {
    portfolioImages.forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
  });
}

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
    contactForm.reset();
  }
});

const okButton = document.getElementById('ok-button');

okButton.addEventListener('click', () => {
  document.getElementById('info-block').style.display = 'none';
  document.getElementById('info-subject').innerText = '';
  document.getElementById('info-text').innerText = '';
});
