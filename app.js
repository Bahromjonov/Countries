// Dark Mode
const elDarkMode = document.querySelector('.header-btn');
const elSearch = document.querySelector('.search');
const elSelect = document.querySelector('.hero-select');
const elLogo = document.querySelector('.logo')
const elShadow = document.querySelector('.header-bg')

elDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    elSearch.classList.toggle('search-bg');
  
    elSelect.classList.toggle('dark-mode');
    elDarkMode.classList.toggle('dark-mode');
    elShadow.classList.toggle('header-bg');
  });
  
window.addEventListener('scroll', function() {
    const elHeader = document.querySelector('.header-bg');
    const elHero = document.querySelector('.hero');
    const heroCard = elHero.getBoundingClientRect();
  
    if (heroCard.top <= 0) {
      elHeader.classList.add('sticky');
      elHero.style.zIndex = '10';
    } else {
      elHeader.classList.remove('sticky');
      elHero.style.zIndex = 'auto';
    }
  });
  

  
  