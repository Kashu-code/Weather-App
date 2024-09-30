const inputBox = document.getElementById('search');
const searchbtn = document.querySelector('.searchbtn');
const image = document.querySelector('.img');
const temperature= document.querySelector('.temperature');
const description= document.querySelector('.description');
const humidity= document.querySelector('.humidity');
const wind= document.querySelector('.wind');
const location_error = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');




async function checkweather(city){
        const api ="bc60530c19e89001f4d98664e424090f";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

        const weather_data = await fetch(`${url}`).then(Response => Response.json());



        if(weather_data.cod===  `404`){
            location_error.style.display ="flex";
            weather_body.style.display = "none";
                console.log('error')
                return;
        }
        location_error.style.display ="none";

        weather_body.style.display = "flex";

            temperature.innerHTML =`${Math.round(weather_data.main.temp-273.15)}C`;
            description.innerHTML = `${weather_data.weather[0].main}`;

            humidity.innerHTML = `${weather_data.main.humidity}%`;
            wind.innerHTML =`${weather_data.wind.speed}Km/H`;

            switch(weather_data.weather[0].main){
				case 'Clouds':
					image.src = "assest/cloud.png";
					break;
				case 'Rain':
					image.src = "assest/rain.png";
					break;
				case 'Mist':
					image.src = "assest/mist.png";
					break;
				case 'Clear':
					image.src = "assest/clear.png";
					break;
				case 'snow':
					image.src = "assest/snow.png";
					break;

		}

}
searchbtn.addEventListener('click',()=>{
    checkweather(inputBox.value);

    
});