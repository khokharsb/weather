// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}


const weatherApi = {
    key: "e29c874f8bb25e5bb9ed87c82fb65f25",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {

    if(event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
}
});

// -----------Get weather Report------------------

function getWeatherReport(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e29c874f8bb25e5bb9ed87c82fb65f25&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(data=>showWeatherReport(data))
}

// ------------------Show weather Report---------------------- 
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city'); 
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ 
    ${Math.floor(weather.main.temp_mix)}&deg;C (max)`;
    
    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
}

// -----------------Days Function ---------------------

function dateManage(dateArg) {

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let months = ["January","Febuary","March","April","May","June",
"July","Aughst","September","October","November","December",]

let year = dateArg.getFullYear();
let month = months[dateArg.getMonth()];
let date = dateArg.getDate();
let day = days[dateArg.getDay()];

return `${date} ${month} (${day}), ${year}`;


}
