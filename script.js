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
