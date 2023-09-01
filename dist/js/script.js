// navar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};


// fade animation
const animatedElement = document.querySelector('.animated-element');

function checkScroll() {
  const windowHeight = window.innerHeight;
  const elementTop = animatedElement.getBoundingClientRect().top;

  if (elementTop < windowHeight) {
    animatedElement.classList.add('opacity-100', 'translate-x-0');
  }
}

window.addEventListener('scroll', checkScroll);



// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});