document.addEventListener("DOMContentLoaded",()=>{
const cityInput = document.getElementById('city-input')
const getWeatherBtn = document.getElementById('get-weather-btn')
const weatherInfo = document.getElementById('weather-info')
const cityName= document.getElementById('city-name')
const tempuratureDisplay  = document.getElementById('temperature')
const descriptionDisplay = document.getElementById('description')
const errorMessage = document.getElementById('error-message')
const API_KEY = '3300f9f63c9a2fe7fa9090e0680719af'
getWeatherBtn.addEventListener('click',async()=>{
  const city =cityInput.value.trim()
  if (!city)return;
  try{
 const weatherData=  await fetchWeatherData(city)
  }catch(error){
    showError()
  }
})

async function fetchWeatherData(city){

}
function displayWeatherData(weatherData){

}
function showError(){

}
function showError(){
  weatherInfo.classList.add('hidden')
  weatherInfo.classList.remove('hidden')
}

  

})