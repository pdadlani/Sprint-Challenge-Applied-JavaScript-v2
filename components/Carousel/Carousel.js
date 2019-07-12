/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.append(carousel());

function carousel() {
  // create the elements
  const carousel = document.createElement('div'),
    left = document.createElement('div'),
    mountain = document.createElement('img'),
    computer = document.createElement('img'),
    trees = document.createElement('img'),
    turntable = document.createElement('img'),
    right = document.createElement('div');

  // set the content
  left.textContent = '<';
  mountain.src = "./assets/carousel/mountains.jpeg";
  computer.src = "./assets/carousel/computer.jpeg";
  trees.src = "./assets/carousel/trees.jpeg";
  turntable.src = "./assets/carousel/turntable.jpeg";
  right.textContent = '>';

  // set the structure
  carousel.append(left,
    mountain,
    computer,
    trees,
    turntable,
    right);

  // set the style
  carousel.classList.add('carousel');
  left.classList.add('left-button');
  right.classList.add('right-button');

  return carousel;
}


// Current index for slides
let slideIndex = 1;
showSlides(slideIndex);

// change slide
function changeSlides(n) {
  // console.log('change slides called with n of:' + n)
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".carousel img");
  // console.log(slides);
  if (n > slides.length) {
    slideIndex = 1
  } else if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// set event listener for left button
const leftButton = document.querySelector('.left-button');
// console.log(leftButton);
leftButton.addEventListener('click', () => changeSlides(-1));

// set event listener for right button
const rightButton = document.querySelector('.right-button');
// console.log(rightButton);
rightButton.addEventListener('click', () => changeSlides(1));
