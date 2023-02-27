/* const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init(){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    images.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider()
}

window.addEventListener('resize',init());
init();
document.querySelector('.slider-next').addEventListener('click',function(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    rollSlider()
})

document.querySelector('.slider-prev').addEventListener('click',function(){
    count--;
    if(count <  0){
        count = images.length -1;
    }
    rollSlider()
})

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}

 */
/* let slider = document.querySelector('.slider'),
  sliderList = slider.querySelector('.slider-list'),
  sliderTrack = slider.querySelector('.slider-track'),
  slides = slider.querySelectorAll('.slide'),
  arrows = slider.querySelector('.slider-arrows'),
  prev = arrows.children[0],
  next = arrows.children[1],
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = --slides.length * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  swipeStartTime,
  swipeEndTime,
  getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide = function() {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
  },
  swipeStart = function() {
    let evt = getEvent();

    if (allowSwipe) {

      swipeStartTime = Date.now();
      
      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);

      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
    }
  },
  swipeAction = function() {

    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  },
  swipeEnd = function() {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');

    if (allowSwipe) {
      swipeEndTime = Date.now();
      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }

  },
  setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

arrows.addEventListener('click', function() {
  let target = event.target;

  if (target.classList.contains('next')) {
    slideIndex++;
  } else if (target.classList.contains('prev')) {
    slideIndex--;
  } else {
    return;
  }

  slide();
}); */



/* message! */
/* 
function nextMsg(i) {
  if (messages.length == i) {
      i = 0;
  }
  $('#message').html(messages[i]).fadeIn(600).delay(1200).fadeOut(2000, function() {
      nextMsg(i + 1);
  });
}

var messages = [
   "БЕЗОПАСТНОСТЬ",
   "КОНФИДЕНЦИАЛЬНОСТЬ", 
  "ОПЕРАТИВНОСТЬ",
  "КОМПЕТЕНТНОСТЬ",
   "ПОНИМАНИЕ", 
   "ЛОЯЛЬНОСТЬ", 
   "ИНОВАЦЫОННЫЕ ПУТИ РЕШЕНИЯ" 
  ];
  
  $('#message').hide();

nextMsg(0); */



/*  */

let slider = document.querySelector('.slider'),
  sliderList = slider.querySelector('.slider-list'),
  sliderTrack = slider.querySelector('.slider-track'),
  slides = slider.querySelectorAll('.slide'),
  arrows = slider.querySelector('.slider-arrows'),
  counter = document.querySelector('.slider-arrows .counterGoal .counter'),
  prev = arrows.children[0],
  next = arrows.children[1],
  slideWidth = slides[0].offsetWidth,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = --slides.length * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  swipeStartTime,
  swipeEndTime,
  getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide = function() {
    if (transition) {
      sliderTrack.style.transition = 'transform .3s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
  },
  swipeStart = function() {
    let evt = getEvent();

    if (allowSwipe) {

      swipeStartTime = Date.now();
      
      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);

       sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing'); 
    }
  },

  swipeAction = function() {

    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      
      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }
      
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  },
  swipeEnd = function() {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

     sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');
 
    if (allowSwipe) {
      swipeEndTime = Date.now();
      if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 1100) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }

  },
  setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

arrows.addEventListener('click', function() {
  let target = event.target;

  if (target.classList.contains('next')) {
    slideIndex++;
    
  } else if (target.classList.contains('prev')) {
    slideIndex--;
    
  } else {
    return;
  }
  
  slide();
});



/* hamburger */

const hamburger = document.querySelector('#language .hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      links = document.querySelector('.menu .menu__block .menu__three .hlinks1'),
      links2 = document.querySelector('.menu .menu__block .menu__three .hlinks2'),
      links3 = document.querySelector('.menu .menu__block .menu__three .hlinks3');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
links2.addEventListener('click', () =>{
  menu.classList.remove('active');
});
links3.addEventListener('click', () =>{
  menu.classList.remove('active');
});
links.addEventListener('click', () =>{
  menu.classList.remove('active');
});
/* jQuery(document).ready(function ($) {
  setInterval(function () {
      moveRight();
  }, 6000);
 */
var slideCountmob = $('#slidermob .wrapper .slidemob').length;
var slideWidthmob = $('#slidermob .wrapper .slidemob').width();
var slideHeightmob = $('#slidermob .wrapper .slidemob').height();
var sliderUlWidthmob = slideCountmob * slideWidthmob;

$('#slidermob').css({ width: slideWidthmob, height: slideHeightmob });

$('#slidermob .wrapper').css({ width: sliderUlWidthmob, marginLeft: - slideWidthmob });

  $('#slidermob .wrapper .slidemob:last-child').prependTo('#slidermob .wrapper');

  function moveLeft() {
      $('#slidermob .wrapper').animate({
          left: + slideWidthmob
      }, 200, function () {
          $('#slidermob .wrapper .slidemob:last-child').prependTo('#slidermob .wrapper');
          $('#slidermob .wrapper').css('left', '');
      });
  };

  function moveRight() {
      $('#slidermob .wrapper').animate({
          left: - slideWidthmob
      }, 200, function () {
          $('#slidermob .wrapper .slidemob:first-child').appendTo('#slidermob .wrapper');
          $('#slidermob .wrapper').css('left', '');
      });
  };

  $('.control_prev').click(function () {
      moveLeft();
  });

  $('.control_next').click(function () {
      moveRight();
  });

/* });     */




/*  */
let slideIndexmob = 1;
showSlides(slideIndexmob);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndexmob += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndexmob = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n > 3) {slideIndexmob = slides.length = 1}
  if (n > 4) {slideIndex = 1}
  if (n < 1) {slideIndexmob = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexmob-1].style.display = "block";
  dots[slideIndexmob-1].className += " active";
}

/*  */





/* $(function() {
  $('marquee').marquee({
    duration: 5000,
    startVisible: true,
    duplicated: true
  });
}); */

$(function(){
  $('marquee').marquee({

  //если хотите всегда анимировать при помощи jQuery
  allowCss3Support: true,

  //работает, когда allowCss3Support установлено в true - смотрите полный список http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
  css3easing: 'linear',

  //требует jQuery easing плагин. По умолчанию - 'linear'
  easing: 'linear',

  //приостанавливает время перед стартом следующей анимации в миллисекундах
  delayBeforeStart: 1000,
  //'left', 'right', 'up' or 'down'
  direction: 'left',

  //true или false - должен ли marquee быть дублирован для эффекта продолжающегося потока
  duplicated: false,

  //скорость marquee в миллисекундах
  duration: 5000,

  //расстояние в пикселях между бегущими строками
  gap: 20,

  //приостанавливает цикл marquee
  pauseOnCycle: false,

  //приостанавливает marquee при наведении курсора мыши - используя плагин jQuery https://github.com/tobia/Pause
  pauseOnHover: false,

  //marquee виден, когда он изначально позиционирован у границы по направлении которой будет двигаться startVisible: false
  
  });
});