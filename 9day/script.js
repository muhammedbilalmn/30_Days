window.addEventListener("load", function () {
    const splash = document.getElementById("splashScreen");
    const main = document.getElementById("mainContent");

    splash.style.opacity = 0;

    setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";
    }, 500); // Wait for transition
});

const apiKey = "your api key"

async function getWeather() {
    
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
                
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayWeather(data);

    } catch (error) {
        console.error('failed to fetch weather data',error);
        alert('failed to fetch weather data ');
        
    }
}

function displayWeather(data){
    // destructuring the data
    const {main: {temp, humidity}, weather, wind:{speed}, sys:{country},name} = data;
    const {main: weatherMain, description, icon} = weather[0];
    // DOM manipulation
    const weatherDisplay = document.getElementById('weatherDisplay');
    if(data.cod !== 200){
        weatherDisplay.innerHTML = `<p>Error: ${data.message}</P>`
    return;
    }

    const weatherHTML = `
        <h2>Weather in ${name}, ${country}</h2>
        <p> temperature: ${temp}</p>
        <p> Weather: ${weatherMain} (${description})</p>
        <p> Humidity: ${humidity}</p>
        <p> wind speed: ${speed}</p>
        <img src="https://openweathermap.org/img/w/${icon}.png" alt="weather icon">

    `;
    weatherDisplay.innerHTML = weatherHTML
}

