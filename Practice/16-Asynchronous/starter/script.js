'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


//  Render Errors
const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}



const renderCountry = function(data, className=''){
    const html =   `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(1) }</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span> ${data.currencies[0].name}</p>
        </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML("beforebegin", html)
    // countriesContainer.style.opacity = 1; 
}



const getCountryAndNeighbour = function(country){
// console.log(country);
// AJAX Call
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v2/name/${country}`);
request.send();
// console.log(request.responseText);

request.addEventListener('load', function(){

    // convert from JSON to Object
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText)
    console.log(data);

    //  Render Country
    renderCountry(data)
    
    //  Get Neighbour Country 2
    const neighbour = data.borders;
    if(!neighbour) return;
    // AJAX Call
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function(){
        // console.log(this.responseText);
        const data2 = JSON.parse(this.responseText)
        console.log(data2);
        renderCountry(data2,'neighbour')
    })

})
}
getCountryAndNeighbour('canada')
// getCountryAndNeighbour('maxico')
// getCountryData('')
// getCountryData('united states of')


//  Fetch Request

// const fGetCountryData = function(country){
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function(response){
//         console.log(response);
//         return response.json()  // json method it self async therefore it also return promise and need to handle with .then
//     }).then(function(data){
//         console.log(data);
//     })
// }
// fGetCountryData('canada')


const getJSON = function(url, errorMsg = 'Something Went Wrong'){
    fetch(url).then(response => {
        if(!response.ok)
            throw new Error(` ${errorMsg} (${response.status})`)
        return response.json()
    })
}



const fGetCountryData = function(country){

        getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not Found!!')
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0]
            // const neighbour = 'sgbsdf'

            if(!neighbour) return;
            return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Neighbour  Not Found!!' )
        })
        
        .then(data2 => renderCountry(data2, 'neighbour'))
        .catch(err => {
            console.error(`${err}`);
            renderError(`Something Went Wrong  ${err.message}. try again`)
        })
        .finally(()=> {
            countriesContainer.style.opacity = 1;  
        })
    }

    btn.addEventListener('click', function(){
        fGetCountryData('germany')
    });
    // fGetCountryData('australia')



// console.log('Test The Microtask Queue Start');
// setTimeout(() => console.log(`0 sec timer`), 0);
// Promise.resolve('resolve promise 1').then(res=> console.log(res));
// console.log(`Test End`);


// const lotteryPromise = new Promise(function(resolve, reject){
//     console.log('lotter Draw Is Happening..');
//     setTimeout(function(){
//         if(Math.random() >= 0.5){
//             resolve('You Win... ')
//         }else {
//             reject(new Error('You Lost... '))
//         }
//     }, 2000)
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function(seconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve, seconds * 1000)
//     });
// };
// wait(2).then(() => {
//     console.log(`I waited for 2 seconds`);
//     return wait(1);
// }).then(() => console.log(`I waited for  1 second`));


//  Async Await 



const whereAmI = async function(country) {
     
    try{ 
        console.log(`-----------------------------------`); 
        const resAwait = await fetch(`https://restcountries.com/v2/name/${country}`)
        const data = await resAwait.json()
        renderCountry(data[0]);
    } catch(err){
        console.error(err.message);
        renderError(`Something Went Wrong... ${err.message}` )
    }

}
whereAmI('germany')
console.log('First');
















