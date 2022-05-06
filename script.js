'use strict'
const weatherBlock = document.querySelector('#weather');

async function loadWeather(e){
    weatherBlock.innerHTML = `
    <div class="weather__img">
        <img src="./src/loader.gif" alt="loading...">
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
    const template = 
    `
    <div class="wrapper">
    <div id="weather" class="weather">
        <div class="weather__stats">
            <div class="country"></div>
            <div class="city"></div>
            <div class="status"></div>
            <div class="temp"></div>
            <div class="wind"></div>
        </div>
        <div class="weather__img">
            <img src="" alt="">
        </div>
    </div>
    </div>
    `
    weatherBlock.innerHTML = template;
}
if(weatherBlock){
    loadWeather()
}