"use strict"

let city;
const weatherBlock = document.querySelector('#weatherBlock');
let update = document.querySelector('#update');

    async function loadWeather(e) {
        const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + city + '&appid=1f6984bc7bfba4749b60d9cc3a4227af';
        const response = await fetch(server, {
            method: 'GET',
        });
        const responseResult = await response.json();
        if (response.ok) {
            getWeather(responseResult);
        } else {
            weatherBlock.innerHTML = responseResult.message;
        }
    }

    function getWeather(data){
        const temp = Math.round(data.main.temp);
        const feelsLike = Math.round(data.main.feels_like);
        const weatherStatus = data.weather[0].main;
        const windSpeed = Math.round(data.wind.speed);
        let now = new Date().toLocaleTimeString();

        document.querySelector('#feels_like').innerHTML = '<img src="img/celsius24px.png" alt="celsius"> <span>Feels like: </span>' + feelsLike + '<span> <sup>o</sup>C</span>';
        document.querySelector('#weatherStatus').innerHTML = weatherStatus;
        document.querySelector('#temp').innerHTML = '<span><img src="img/celsius32px.png" alt="celsius"> ' + temp + '</span> <sup>o</sup>C</span>';
        document.querySelector('#windSpeed').innerHTML = '<img src="img/wind24px.png" alt="wind"><span> Wind speed: </span> ' + windSpeed + '<span> m/s </span>';
        document.querySelector('#update').innerHTML = '<span><i class="fa-solid fa-arrows-rotate"></i> </span>' + now;

            //weatherIcon img
            if (weatherStatus == 'Clouds') document.querySelector('#weatherIcon').innerHTML = '<span><img src="img/cloud.png" alt=""></span>';
            if (weatherStatus == 'Clear') document.querySelector('#weatherIcon').innerHTML = '<span><img src="img/sun.png" alt=""></span>';
            if (weatherStatus == 'Rain') document.querySelector('#weatherIcon').innerHTML = '<span><img src="img/rainy.png" alt=""></span>';
            if (weatherStatus == 'Mist' || weatherStatus == 'Haze') document.querySelector('#weatherIcon').innerHTML = '<span><img src="img/mist.png" alt=""></span>';

    }

    function select_city() {
        city = document.getElementById('select').value;
        if (weatherBlock) loadWeather();
    }
    
    select_city();

    update.addEventListener('click', select_city);