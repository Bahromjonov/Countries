// Elementlarni tanlash
const elDarkMode = document.querySelector('.header-btn');
const elSearch = document.querySelector('.search');
const elRegionSelect = document.querySelector('.hero-select');
const elList = document.querySelector('.list');

// API URL
const api = 'https://restcountries.com/v3.1/all';

// Davlatlar ma'lumotlarini saqlash uchun massiv
let countriesData = [];

// Davlatlarni yuklash va ro'yxatga joylash uchun funksiya
const fetchCountries = () => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      countriesData = data;
      showAllCountries(); // Barcha davlatlarni ko'rsatish
    })
    .catch((error) => console.log(error));
};

// Davlatlarni ko'rsatuvchi funksiya
const showCountries = (countries) => {
  elList.innerHTML = ''; // Ro'yxatni tozalash

  countries.forEach((country) => {
    const li = document.createElement('li');
    li.classList.add('none');
    li.classList.add('card');
   
    elList.appendChild(li);

    const flagDiv = document.createElement('div');
    flagDiv.classList.add('flag');
    const flagImg = document.createElement('img');
    flagImg.src = country.flags.svg;
    flagImg.alt = `${country.name.common} flag`;
    flagImg.style.borderTopRadius = '8px';
    flagImg.style.width = '100%';
    flagDiv.appendChild(flagImg);
    li.appendChild(flagDiv);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    infoDiv.style.paddingBottom = '46px';
    infoDiv.style.paddingLeft = '24px';
    infoDiv.style.paddingTop = '24px';

    infoDiv.style.borderRadius = '8px';
    li.appendChild(infoDiv);

    const countryName = document.createElement('h3');
    countryName.classList.add('still')
    const countryNameText = document.createTextNode(country.name.common);
    countryName.appendChild(countryNameText);
    infoDiv.appendChild(countryName);

    const capital = document.createElement('p');
    
    capital.textContent = `Capital: ${country.capital?.[0] || 'N/A'}`;
    infoDiv.appendChild(capital);

    const population = document.createElement('p');
   
    population.textContent = `Population: ${country.population?.toLocaleString() || 'N/A'}`;
    infoDiv.appendChild(population);
  });
};

// Barcha davlatlarni ko'rsatish
const showAllCountries = () => {
  showCountries(countriesData);
};

// Bölgelere göre davlatlarni ko'rsatish
const filterByRegion = (region) => {
  const filteredCountries = countriesData.filter((country) =>
    country.region.includes(region)
  );
  showCountries(filteredCountries);
};

// Davlatlarni yuklash va qidirish uchun hodisalar
fetchCountries();

// Qidirishning ishlayishi uchun hodisa
elSearch.addEventListener('input', () => {
  const inputValue = elSearch.value.toLowerCase();

  const cards = document.querySelectorAll('.card');
  const countryNames = document.querySelectorAll('.info h3');

  cards.forEach((card, i) => {
    const countryName = countryNames[i].textContent.toLowerCase();
    if (countryName.includes(inputValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Bölgelerin seçimi
elRegionSelect.addEventListener('change', () => {
  const selectedRegion = elRegionSelect.value;

  if (selectedRegion === 'Filter') {
    showAllCountries();
  } else {
    filterByRegion(selectedRegion);
  }
});
const btn = document.querySelector('.top');
const logo = document.querySelector('.logoo')

// Dark Mode hodisasi
elDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  elSearch.classList.toggle('search-bg');
  elRegionSelect.classList.toggle('dark-mode');
  elDarkMode.classList.toggle('dark-mode');
  infoDiv.classList.toggle('card-bg ')
});


btn.addEventListener('scroll', () =>{
    if(this.window.scrollY > 500){
        btn.style.display = 'block'
    }else{
        btn.style.display = 'none'
    }
})

btn.addEventListener('click',() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
})
  


