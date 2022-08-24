"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCounrty = function (data, className = "") {
  const html = `
  <article class="country ${className} ">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${+(
        data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
 </article>
`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with gecoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(
        `You are in ${data.standard.city} , ${data.standard.countryname}`
      );
      return fetch(
        `https://restcountries.com/v2/name/${data.standard.countryname}`
      );
    })
    .then((res) => {
      if (!res.ok)
        throw new Error(`Country not found ${res.error.description}`);

      return res.json();
    })
    .then((data) => renderCounrty(data[0]))
    .catch((err) => console.error(`${err.message} 💥`));
};

whereAmI(52, 13);
// whereAmI(19.037, 72.872);
// whereAmI(-33.933, 18.474);
