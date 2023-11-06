const apikey = "770ccdec94fbb616ec774c3d77c56b3e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchinput = document.querySelector(".search-box input");
const searchbtn = document.querySelector(".search-box button");
const weathericon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

async function checkWeather(city) {
    const responce = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await responce.json();

    if (responce.status == 404) {
        error.style.display = "block";
        weather.style.display = "none";
    } else {
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humi").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + " km/hr";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png";
        } else if (data.weather[0].main == "Snow") {
            weathericon.src = "images/snow.png";
        } else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png";
        } else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png";
        } else if (data.weather[0].main == "Haze") {
            weathericon.src = "images/mist.png";
        }

        weather.style.display = "flex";
        error.style.display = "none";
    }

}

searchbtn.addEventListener("click", () => {
    checkWeather(searchinput.value);
})

searchinput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        checkWeather(searchinput.value);
    }
});