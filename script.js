$(document).ready(function () {
  $(".sub-btn").click(function () {
      $(this).next(".sub-menu").slideToggle();
  });
  
  $(".more-btn").click(function () {
      $(this).next(".more-menu").slideToggle();
  });

  var menu = document.querySelector(".menu");
  var menuBtn = document.querySelector(".menu-btn");
  var closeBtn = document.querySelector(".close-btn");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });
  
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  $(document).ready(function () {
    const video = $('video')[0]; 

    $('video').on('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
 });
  $(".obsimagey").click(function () {
    $(this).css("transform", "translateX(-100%)"); 

    $("ul").fadeIn(500);

    const typewriterElements = document.querySelectorAll('ul li p'); 
    typewriterElements.forEach((element, index) => {
        setTimeout(() => {
            startTypewriterAnimation(element);
        }, index * 100); 
    });
  });

  const typewriterElements = document.querySelectorAll('.typewriter');
  const headings = document.querySelectorAll('.first h2, .second h2, .third h2, .fourth h2, .fifth h2');

  headings.forEach((heading, index) => {
    heading.addEventListener('click', () => {
      const paragraph = typewriterElements[index];
      startTypewriterAnimation(paragraph);
    });
  });

  function startTypewriterAnimation(element) {
    const text = element.textContent.trim();
    const textArray = text.split('');
    let index = 0;

    element.style.visibility = 'visible'; 
    element.innerHTML = ''; 

    function typeWriter() {
      if (index < textArray.length) {
        element.innerHTML += textArray[index];
        index++;
        setTimeout(typeWriter, 50);
      }
    }

    typeWriter(); 
  }

  let currentUnit = 0;
  const cards = document.querySelectorAll('.card');

  function updateUnit() {
    cards.forEach((card, index) => {
        card.style.order = (index - currentUnit + cards.length) % cards.length;
        card.classList.remove('actives'); 
        card.classList.add('inactive'); 
    });

    cards[currentUnit].classList.add('active'); 
    cards[currentUnit].classList.remove('inactive'); 
  }

  function nextUnit() {
    currentUnit = (currentUnit + 1) % cards.length; 
    updateUnit();
  }

  function prevUnit() {
    currentUnit = (currentUnit - 1 + cards.length) % cards.length; 
    updateUnit();
  }

  updateUnit();

  document.querySelector('.arrow.left').addEventListener('click', prevUnit);
  document.querySelector('.arrow.right').addEventListener('click', nextUnit);
});