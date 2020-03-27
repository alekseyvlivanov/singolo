// Header
const marginTop = 95;
const menuItems = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('section');

document.addEventListener('scroll', () => {
  const curPos = window.scrollY;

  sections.forEach(el => {
    if (
      el.offsetTop - marginTop <= curPos &&
      el.offsetTop + el.offsetHeight > curPos
    ) {
      menuItems.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').substring(1) === el.getAttribute('id')) {
          a.classList.add('active');
        }
      });
    }
  });
});

window.scrollTo(0, 0);

// Slider. Переключение слайдов
const carouselSlider = document.querySelector('.carousel-slider');
const carouselDivs = document.querySelectorAll('.carousel-slider > div');
const carouselLength = carouselDivs.length;

const chevLeft = document.querySelector('#chev-left');
const chevRight = document.querySelector('#chev-right');

let counter = 1;
let size = carouselDivs[0].clientWidth;

carouselSlider.style.transform = 'translateX(' + -size * counter + 'px';

chevLeft.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlider.style.transition = 'transform 0.5s ease-in-out';
  counter -= 1;
  carouselSlider.style.transform = 'translateX(' + -size * counter + 'px';
});

chevRight.addEventListener('click', () => {
  if (counter >= carouselLength - 1) return;
  carouselSlider.style.transition = 'transform 0.5s ease-in-out';
  counter += 1;
  carouselSlider.style.transform = 'translateX(' + -size * counter + 'px';
});

carouselSlider.addEventListener('transitionend', () => {
  if (counter === 0) {
    carouselSlider.style.transition = 'none';
    counter = carouselLength - 2;
    carouselSlider.style.transform = 'translateX(' + -size * counter + 'px';
  }
  if (counter === carouselLength - 1) {
    carouselSlider.style.transition = 'none';
    counter = 1;
    carouselSlider.style.transform = 'translateX(' + -size * counter + 'px';
  }
});

// Slider. Активация экранов телефонов
const iphoneVertDivs = document.querySelectorAll('.iphoneVertDiv');
const iphoneHorDivs = document.querySelectorAll('.iphoneHorDiv');

const iphoneVerticalBlacks = document.querySelectorAll(
  '.iphone-vertical-black',
);
const iphoneHorizontalBlacks = document.querySelectorAll(
  '.iphone-horizontal-black',
);

let displayVerticalBlacks = false;
let displayHorizontalBlacks = false;

iphoneVertDivs.forEach(iphoneVertDiv => {
  iphoneVertDiv.addEventListener('click', () => {
    if (displayVerticalBlacks) {
      iphoneVerticalBlacks.forEach(iphoneVerticalBlack => {
        iphoneVerticalBlack.style.display = 'none';
      });
    } else {
      iphoneVerticalBlacks.forEach(iphoneVerticalBlack => {
        iphoneVerticalBlack.style.display = 'block';
      });
    }
    displayVerticalBlacks = !displayVerticalBlacks;
  });
});

iphoneHorDivs.forEach(iphoneHorDiv => {
  iphoneHorDiv.addEventListener('click', () => {
    if (displayHorizontalBlacks) {
      iphoneHorizontalBlacks.forEach(iphoneHorizontalBlack => {
        iphoneHorizontalBlack.style.display = 'none';
      });
    } else {
      iphoneHorizontalBlacks.forEach(iphoneHorizontalBlack => {
        iphoneHorizontalBlack.style.display = 'block';
      });
    }
    displayHorizontalBlacks = !displayHorizontalBlacks;
  });
});

window.addEventListener('resize', () => {
  carouselSlider.style.transition = 'none';
  size = carouselDivs[0].clientWidth;
  carouselSlider.style.transform = 'translateX(' + -size * counter + 'px';
});

// Portfolio. Переключение табов
const tags = document.querySelectorAll('.tag');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioGrid = document.querySelector('.portfolio-grid');

for (const tag of tags) {
  tag.addEventListener('click', event => {
    if (!tag.classList.contains('active')) {
      tags.forEach(el => el.classList.remove('active'));
      event.target.classList.add('active');

      for (let i = portfolioItems.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * i);
        const temp = document.createElement('div');

        portfolioItems[i].parentNode.insertBefore(temp, portfolioItems[i]);
        portfolioItems[j].parentNode.insertBefore(
          portfolioItems[i],
          portfolioItems[j],
        );

        temp.parentNode.insertBefore(portfolioItems[j], temp);
        temp.parentNode.removeChild(temp);
      }
    }
  });
}

// Portfolio. Взаимодействие с картинками
const portfolioImages = document.querySelectorAll('.portfolio-item img');

for (const portfolioImage of portfolioImages) {
  portfolioImage.addEventListener('click', event => {
    if (portfolioImage.classList.contains('active')) {
      portfolioImage.classList.remove('active');
    } else {
      portfolioImages.forEach(el => el.classList.remove('active'));
      event.target.classList.add('active');
    }
  });
}

// Get a quote
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (contactForm.checkValidity()) {
    const contactSubject = document
      .querySelector('#contact-subject')
      .value.trim();
    const contactMessage = document
      .querySelector('#contact-message')
      .value.trim();

    document.querySelector('#info-subject').innerText = contactSubject
      ? 'Тема: ' + contactSubject
      : 'Без темы';
    document.querySelector('#info-text').innerText = contactMessage
      ? 'Описание: ' + contactMessage
      : 'Без описания';
    document.querySelector('#info-block').style.display = 'block';
    document.querySelector('#info-message').style.display = 'block';
    contactForm.reset();
  }
});

const okButton = document.querySelector('#ok-button');

okButton.addEventListener('click', () => {
  document.querySelector('#info-block').style.display = 'none';
  document.querySelector('#info-message').style.display = 'none';
  document.querySelector('#info-subject').innerText = '';
  document.querySelector('#info-text').innerText = '';
});

// Hamburger menu
const toggle = document.querySelector('.toggle');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('#navbar');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  document.querySelector('#info-block').classList.toggle('burger');
  toggle.classList.toggle('burger');
  logo.classList.toggle('burger');
  navbar.classList.toggle('burger');
  menu.classList.toggle('burger');
});
