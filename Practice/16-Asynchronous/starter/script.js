'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function(country){
    console.log(country);
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();
// console.log(request.responseText);

request.addEventListener('load', function(){
    // console.log(this.responseText);
    // convert from JSON to Object
    const data = JSON.parse(this.responseText)
    console.log(data);

    const html =   `
    <article class="country">
        <img class="country__img" src="${data[0].flag}" />
        <div class="country__data">
        <h3 class="country__name">${data[0].name}</h3>
        <h4 class="country__region">${data[0].region}</h4>
        <p class="country__row"><span>👫</span>${+(data[0].population / 1000000).toFixed(1) }</p>
        <p class="country__row"><span>🗣️</span>${data[0].languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data[0].currencies[0].name}</p>
        </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML("beforebegin", html)
    countriesContainer.getElementsByClassName.opacity = 1; 

})
}
getCountryData('canada')
// getCountryData('')
getCountryData('usa')

 
