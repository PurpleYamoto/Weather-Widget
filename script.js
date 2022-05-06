'use strict'
const weatherBlock = document.querySelector('#weather');

async function loadWeather(e){
    weatherBlock.innerHTML = `
    <div class="weather__loader">
        <img class="loader" src="./src/loader.gif" alt="loading...">
    </div>
    `
    const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=34ea910f7f7d6edf620f627f64a3248c`
    const response = await fetch(server,{
        method:'GET',
    });
    const responseResult = await response.json();
    if(response.ok){
        getWeather(responseResult)
    }else{
        weatherBlock.innerHTML = responseResult.message;
    }
};
function getWeather(data){
    console.log(data)
    const city = data.name;
    const temp = Math.round(data.main.temp);
    const wind =Math.round(data.wind.speed);
    const status = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;
    const template = 
    `
    <div class="wrapper">
    <div id="weather" class="weather">
    <p class="description">current weather</p>
        <div class="weather__stats">
            <div class="city param">${city}</div>
            <div class="status param">${status}</div>
            <div class="temp param">${temp} C°</div>
            <div class="wind param">Wind speed: ${wind} m/s</div>
        </div>
        <div class="weather__img">
            <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="">
        </div>
    </div>
    </div>
    `
    weatherBlock.innerHTML = template;
}
if(weatherBlock){
    loadWeather()
}