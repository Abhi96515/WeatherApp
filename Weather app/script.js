const apikey = 'f725e679d858b9a2c5c1bd969033d681'
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchInp = document.querySelector("#search input")
const searchBtn = document.querySelector("#search button")
const weathIcon = document.querySelector(".weather-icon")

 async function checkWeather(city){
    const responce = await fetch(url + city + `&appid=${apikey}`)
    const data = await responce.json()

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +`°C`
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".humidity").innerHTML = data.main.humidity+'%'
    document.querySelector(".wind").innerHTML = data.wind.speed + 'Km/hr'
    

    if(data.weather[0].main=="Clouds"){
        weathIcon.src = "weather-app-img/images/clouds.png"
    }else if(data.weather[0].main=="Clear"){
        weathIcon.src = "weather-app-img/images/clear.png"
    }else if(data.weather[0].main=="Rain"){
        weathIcon.src = "weather-app-img/images/rain.png"
    }else if(data.weather[0].main=="Drizzle"){
        weathIcon.src = "weather-app-img/images/drizzle.png"
    }else if(data.weather[0].main=="Mist"){
        weathIcon.src = "weather-app-img/images/mist.png"
    }
 }

 document.querySelector(".weather").style.display = "block"

 searchBtn.addEventListener("click",()=>{
    checkWeather(searchInp.value)
 })