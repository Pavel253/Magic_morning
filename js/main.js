// Бургер

let burger = document.querySelector('.burger')
let burgerMenu = document.querySelector('.header__burger')
let header = document.querySelector('header')

burger.addEventListener('click', function() {
  burger.classList.toggle('_active')
  header.classList.toggle('_active')
  burgerMenu.classList.toggle('_active')
})



let quotes = document.querySelectorAll('.text__slider .slider-wrapper .slide')
let slidetQuotes = document.querySelector('.text__slider .slider-wrapper')
let dots = document.querySelectorAll('.dot')
let countQuotes = 0;
let widthQuotes;
let index = 0;

function initQuotes() {
  widthQuotes = document.querySelector('.text__slider').offsetWidth;
  slidetQuotes.style.width = widthQuotes * quotes.length + 'px';
  quotes.forEach(item => {
    item.style.width = widthQuotes + 'px';
    item.style.height = 'auto'
  })
  rollQuotes()
}

window.addEventListener('resize', initQuotes)
initQuotes()

document.querySelector('#btn-next').addEventListener('click', function () {
  countQuotes++
  if (countQuotes >= quotes.length) {
    countQuotes = 0
  }
  rollQuotes()
})

document.querySelector('#btn-prev').addEventListener('click', function () {
  countQuotes--
  if (countQuotes < 0) {
    countQuotes = quotes.length - 1
  }
  rollQuotes()
})

function rollQuotes() {
  slidetQuotes.style.transform = 'translate(-' + countQuotes * widthQuotes + 'px)'
}



//Фото слайдер

let photo = document.querySelectorAll('.container__photo .slider__photo .image__slider')
let sliderPhoto = document.querySelector('.container__photo .slider__photo')
let countPhoto = 0;
let widthPhoto;

function initPhoto() {
  widthPhoto = document.querySelector('.container__photo').offsetWidth;
  sliderPhoto.style.width = widthPhoto * photo.length + 'px';
  photo.forEach(item => {
    item.style.width = widthPhoto + 'px';
    item.style.height = 'auto'
  })
  rollSliderPhoto()
}

window.addEventListener('resize', initPhoto)
initPhoto()

document.querySelector('.arrows__next').addEventListener('click', function () {
  countPhoto++
  if (countPhoto >= photo.length ) {
    countPhoto = 0
  }
  rollSliderPhoto()
})

document.querySelector('.arrows__prev').addEventListener('click', function () {
  countPhoto--;
  if(countPhoto < 0) {
    countPhoto = photo.length - 1
  }
  rollSliderPhoto()
})

function rollSliderPhoto() {
  sliderPhoto.style.transform = 'translate(-' + countPhoto * widthPhoto + 'px)'
}


//Слайдер отзывов

const images = document.querySelectorAll('.slider .container__review .reviews__block-name');
const sliderLine = document.querySelector('.slider .container__review');
let count = 0;
let width;

function init() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px'
  images.forEach(item => {
    item.style.width = width + 'px'
    item.style.height = 'auto'
  })
  rollSlider()
}

window.addEventListener('resize', init)
init()

document.querySelector('.next').addEventListener('click', function () {
  count++
  if (count >= images.length) {
    count = 0
  }
  rollSlider()
})


document.querySelector('.prev').addEventListener('click', function () {
  count--
  if (count < 0) {
    count = images.length - 1
  }
  rollSlider()
})

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)'
}

//Слайдер книг

let sliderBook = document.querySelectorAll('.library__books .block__books .reviews__buyer')
let sliderBooks = document.querySelector('.library__books .block__books')
let offsetBook = 0;
let offsetWight;

function offsetInit() {
  offsetWight = document.querySelector('.library__books').offsetWidth;
  sliderBooks.style.width = offsetWight * sliderBook.length + 'px';
  sliderBook.forEach(item => {
    item.style.width = sliderBook + 'px'
    item.style.height = 'auto'
  })
  rollIBook()

}

offsetInit()
window.addEventListener('resize', offsetInit)

document.querySelector('.next-book').addEventListener('click', function () {
  offsetBook++;
  if (offsetBook >= sliderBook.length) {
    offsetBook = 0
  }
  rollIBook()
})

document.querySelector('.prev-book').addEventListener('click', function () {
  offsetBook--;
  if (offsetBook < 0) {
    offsetBook = sliderBook.length - 1
  }
  rollIBook()
})

function rollIBook() {
  sliderBooks.style.transform = 'translate(-' + offsetBook * offsetWight + 'px)';
}



//Модальные окна

// Get DOM Elements
const modal1 = document.querySelector('#my-modal1');
const modalBtn1 = document.querySelector('#modal-btn1');
const closeBtn1 = document.querySelector('.close1');

const modal2 = document.querySelector('#my-modal2');
const modalBtn2 = document.querySelector('#modal-btn2');
const closeBtn2 = document.querySelector('.close2');

const modal3 = document.querySelector('#my-modal3');
const modalBtn3 = document.querySelector('#modal-btn3');
const closeBtn3 = document.querySelector('.close3');

// Events
modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);
window.addEventListener('click', outsideClick1);

modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
window.addEventListener('click', outsideClick2);

modalBtn3.addEventListener('click', openModal3);
closeBtn3.addEventListener('click', closeModal3);
window.addEventListener('click', outsideClick3);

// Open
function openModal1() {
  modal1.style.display = 'block';
}

function openModal2() {
modal2.style.display = 'block';
}

function openModal3() {
    modal3.style.display = 'block';
}

// Close
function closeModal1() {
  modal1.style.display = 'none';
}

function closeModal2() {
    modal2.style.display = 'none';
}

function closeModal3() {
    modal3.style.display = 'none';
}

// Close If Outside Click
function outsideClick1(e) {
  if (e.target == modal1) {
      modal1.style.display = 'none';
  }
}

function outsideClick2(e) {
    if (e.target == modal2) {
        modal2.style.display = 'none';
    }
  }

function outsideClick3(e) {
    if (e.target == modal3) {
        modal3.style.display = 'none';
    }
}

//Переходы

document.querySelectorAll('a.link-a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)

        const scroolTarget = document.getElementById(href)

        const elementPosition = scroolTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})

document.querySelectorAll('a.link-btn').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault()

        const href = this.getAttribute('href').substring(1)

        const scroolTarget = document.getElementById(href)

        const elementPosition = scroolTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})