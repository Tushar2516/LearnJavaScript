'use strict';

console.log(`V239 Half watch again and find error`);

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Workout Class
class Workout {
    date = new Date();
    id = (Date.now() + ''.slice(-10));

    constructor(coords, distance, duration) {
        // this.date = ...
        // this.id = ...
        this.coords = coords;
        this.distance = distance; // in km
        this.duration = duration;  // in min
    }
}

//  Running Class 
class Running extends Workout {
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }

    calcPace() {
        //  min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

//  Cycle Class
class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }

    calcSpeed() {
        // km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

// const run1 = new Running([39, -12], 5.2, 24, 178)
// const cycle1 = new Cycling([39, -12], 27, 95, 523)
// console.log(run1, cycle1);



const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


//  class App (Main)
class App {
    //  Private Instance Property
    #map;
    #mapEvent;
    #workouts = [];

    constructor() {
        this._getPosition();

        //  Event Listener For Form
        form.addEventListener('submit', this._newWorkout.bind(this))
        //  TOggle Event
        inputType.addEventListener('change', this._toggleElevationField)


    }

    //  get Position Method
    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert('Could Not get Your Position')
            })
        }
    }

    //  Load Map Method
    _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude]

        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        // Handling Clicks On Map
        this.#map.on('click', this._showForm.bind(this))

    }

    //  Show Form Method
    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    //  Toggle Event For Running and Cycling Method
    _toggleElevationField() {
        console.log(inputType);
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }

    //  New Work out Method
    _newWorkout(e) {

        // Check Valid Number or not
        const validInputs = (...inputs) =>
            inputs.every(inp => Number.isFinite(inp));

        const allPositive = (...inputs) =>
            inputs.every(inp => inp > 0);

        e.preventDefault()
        // Clear Fields

        //  Get data from form
        const type = inputType.value;
        const distance = inputDistance.value;
        const duration = inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng
        let workout;
        //  Check if data is valid

        //  If workout running, Create running object
        if (type === 'running') {
            const cadence = +inputCadence.value;
            if (!validInputs(distance, duration, cadence) ||
                !allPositive(distance, duration, cadence)
            ) return alert('Input have to be positive Number')

            workout = new Running([lat, lng], distance, duration, cadence);

        }

        //  If workout cycling, create cycling object
        if (type === 'cycling') {
            const elevation = +inputElevation.value;
            if (!validInputs(distance, duration, elevation) ||
                !allPositive(distance, duration)
            ) return alert('Input have to be positive Number')

            workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        //  Add new object to workout array
        this.#workouts.push(workout)
        console.log(workout);

        //  Render workout on map as marker

        console.log(lat, lng);
        L.marker([lat, lng])
            .addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup '
            }))
            .setPopupContent('Workout')
            .openPopup();

        //  Render workout on list.

        //  Hide Form + Clear Input fields


        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''



    }

}


const app = new App()






































