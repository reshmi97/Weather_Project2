const apiKey="58b1c5da2640d294208413394aaa62e5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".temp-img");

async function checkWeather(city){
        // const city = "gurugram";  // Example city; you can replace this with user input
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
        if(response.status == 404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
        }else {
                     // const response = await fetch(apiUrl+city+`&appid=${apiKey}`);//wrong
                const data = await response.json();
                console.log(data);

                document.querySelector(".city").innerHTML=data.name;
                document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
                document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
                document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";

                if(data.weather[0].main=="Clouds"|| data.weather[0].main=="Smoke" || data.weather[0].main=="Fog"){
                        weatherIcon.src="images/clouds.png";
                }else if(data.weather[0].main=="Clear"){
                        weatherIcon.src="images/clear.png";
                }else if(data.weather[0].main=="Dizzle"){
                        weatherIcon.src="images/dizzle.png";
                }else if(data.weather[0].main=="Mist" ||data.weather[0].main=="Haze" ){
                        weatherIcon.src="images/mist.png";
                }else if(data.weather[0].main=="Rain"){
                        weatherIcon.src="images/rain.png";
                }else if(data.weather[0].main=="Snow" || data.weather[0].main=="Hail"){
                        weatherIcon.src="images/snow.png";
                }else if(data.weather[0].main=="Wind"){
                        weatherIcon.src="images/wind.png";
                }

                document.querySelector(".weather").style.display="block";
                document.querySelector(".error").style.display="none";
        
        }

}

searchbtn.addEventListener("click",()=>{
        checkWeather(searchbox.value);
})

//checkWeather();


// async function checkWeather() {
        // try {
        //         const city = "london";  // Example city; you can replace this with user input
        //         const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
                
        //         // Log the response status to confirm a successful request
        //         console.log("Response Status:", response.status);

        //         // Check if the response was successful
        //         if (!response.ok) {
        //         throw new Error(`HTTP error! status: ${response.status}`);
        //         }

        //         // Parse JSON if response was successful
        //         const data = await response.json();
        //         console.log("Weather Data:", data);  // Log the full data for verification

        // } catch (error) {
        //         // Log any network or response errors to the console
        //         console.error("Error fetching data:", error);
        // }
// }
// checkWeather();


