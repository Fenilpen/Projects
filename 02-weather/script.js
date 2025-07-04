document.addEventListener('DOMContentLoaded', ()=>{
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById('weather-info')
    const cityNameDisplay = document.getElementById('city-name')
    const tempratureDisplay = document.getElementById('temprature')
    const descriptionDisplay = document.getElementById('description')
    const errorMessage = document.getElementById('error-massage')

    const API_KEY = "045bc7ded105cd1d503784d8a38011f4"   //env varriables

    getWeatherBtn.addEventListener('click',() => {
       const city = cityInput.value.trim()
       if(!city) return;

        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData (weatherData)
       } catch (error) {
            showError()
       }

    })

    function fetchWeatherData(city){
        
    }

    function displayWeatherData(){
        
    }

    function showError(){
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden')
        
    }
})

// here is the example of promise since we are about to use promise

// function testing() {
//    return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             let test = true
//             if (test) resolve("testing done successfully");
//             else reject("test failed");
//         },4000)
//     })

// }

// old method 

// testing()
//     .then((done)=>{
//     console.log(done);
//     return `hi this is new massage`    
// })
//     .then((newe)=>{
//         console.log(newe);
//     })
//     .catch((failed)=>{
//         console.log(failed);
//     })


