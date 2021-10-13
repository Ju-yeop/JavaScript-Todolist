const MY_API = "ddfe265249ef245b93a1c51cf0f4e05b";

function ongeosuccess(position){
    const lat = position.coords.latitude;
    const longi = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${MY_API}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
    });
}

function ongeofail(){
    alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(ongeosuccess, ongeofail);