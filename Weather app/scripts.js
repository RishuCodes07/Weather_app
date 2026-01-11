document.addEventListener("DOMContentLoaded",()=>{
const cityInput = document.getElementById('city-input')
const getWeatherBtn = document.getElementById('get-weather-btn')
const weatherInfo = document.getElementById('weather-info')
const cityName= document.getElementById('city-name')
const tempuratureDisplay  = document.getElementById('temperature')
const descriptionDisplay = document.getElementById('description')
const errorMessage = document.getElementById('error-message')
const API_KEY = "3300f9f63c9a2fe7fa9090e0680719af"
getWeatherBtn.addEventListener('click',async()=>{
  const city =cityInput.value.trim()
  if (!city)return;
  try{
 const weatherData=  await fetchWeatherData(city)
 displayWeatherData(weatherData)
  }catch(error){
    showError();
  }
})

async function fetchWeatherData(city){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

  const response= await fetch(url)
  console.log("RESPONSE", response)
  console.log(typeof response)
  if(!response.ok){
    throw new Error("City not found") 
  }
  const data = await response.json()
  return data  
}
function displayWeatherData(data){
 console.log(data)
 const{name,main,weather}= data 
 cityName.textContent = name
 tempuratureDisplay.textContent= `Tempurature -> ${main.temp}`
 descriptionDisplay.textContent=`Weather -> ${weather[0].description}`
  weatherInfo.classList.add('hidden')
  weatherInfo.classList.remove('hidden')

}
function showError(){

}
function showError(){
  weatherInfo.classList.remove('hidden')
  weatherInfo.classList.add('hidden')
}

  

})