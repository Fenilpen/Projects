document.addEventListener('DOMContentLoaded', ()=>{
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById('weather-info')
    const cityNameDisplay = document.getElementById('city-name')
    const tempratureDisplay = document.getElementById('temprature')
    const descriptionDisplay = document.getElementById('description')
    const errorMessage = document.getElementById('error-massage')

    const API_KEY = "045bc7ded105cd1d503784d8a38011f4"   //env varriables

    getWeatherBtn.addEventListener('click',async () => {
       const city = cityInput.value.trim()
       if(!city) return;

        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData (weatherData)
       } catch (error) {
            showError()
       }

    })

    async function fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`    
        const response = await fetch(url)
        console.log(typeof response);
        console.log("RESPONSE",response);

        if(!response.ok) {
            throw new Error("City Not Found");
        }
        let data = await response.json()
        return data
    }

    function displayWeatherData(data){
        console.log(data);
        const {name,main,weather} = data  
        
        //unlock the display
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')
        
        cityNameDisplay.textContent = name    
        tempratureDisplay.textContent = `Temperature : ${main.temp}`
        descriptionDisplay.textContent = `Weather : ${weather[0].description}`
    }

    function showError(){
        errorMessage.classList.remove('hidden')
        weatherInfo.classList.add('hidden');
        
    }
})

// Use async on any function where you're going to use await inside it, 
// Or if you want the function to always return a Promise.

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

// new method

// async function tested() {
//     try {
//         console.log("i am in try");
//         const getting = await testing()
//         console.log("here its done,",getting);
        
//     } catch (error) {
//         console.log("i am in error",error);
//     }
// }

// tested()

