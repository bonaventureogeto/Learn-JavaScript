// Purpose: To create a weather application that displays the current weather and a five-day forecast for a location.

// To create a weather application that displays the current weather for a location,
//make an API call to retrieve the current weather data.
//The code should display the location, temperature, pressure, humidity, and wind speed.

// import './env';

const myLocation = document.getElementById('location');
const search = document.getElementById('search');
const weatherData = document.getElementById('weather');
const API_KEY = process.env.YOUR-API-KEY;

// To add a search box to the weather application
search.addEventListener('click', function () {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myLocation.value}&appid=${API_KEY}`)
		.then(data => data.json())
		console.log(data)
		.then(data => {
			const locationCoordinates = data.coord;
			const currentWeather = data.weather[0].description;
			const currentTemp = Math.round(data.main.temp - 273.15);
			const currentPressue = data.main.pressure;
			const currentHumidity = data.main.humidity;
			const currentWind = data.wind.speed;
			weatherData.innerHTML = `
				<h2>Location: ${myLocation.value}</h2>
				<p>Current weather: ${currentWeather}</p>
				<p>Current temperature: ${currentTemp}°C</p>
				<p>Current pressure: ${currentPressue} hPa</p>
				<p>Current humidity: ${currentHumidity}%</p>
				<p>Current wind: ${currentWind} m/s</p>
			`;
		})
		.catch(error => {
			weatherData.innerHTML = `<p>Error: ${error}</p>`;
		});
});



// To add a five-day forecast to the weather application,
//make another API call to retrieve the five-day forecast data.
//The code should display the date, temperature, and weather conditions for each day.

// const forecast = document.createElement('div');
// forecast.id = 'forecast';
// weather.appendChild(forecast);

// search.addEventListener('click', function () {
// 	fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location.value}&appid=${API_KEY}`)
// 		.then(data => data.json())
// 		.then(data => {
// 			const currentWeather = data.list[0].weather[0].description;
// 			const currentTemp = Math.round(data.list[0].main.temp - 273.15);
// 			weather.innerHTML = `
// 				<p>Current weather: ${currentWeather}</p>
// 				<p>Current temperature: ${currentTemp}°C</p>
// 			`;
// 			forecast.innerHTML = '';
// 			for (let i = 1; i <= 5; i++) {
// 				const date = new Date(data.list[i].dt * 1000).toDateString();
// 				const temp = Math.round(data.list[i].main.temp - 273.15);
// 				const condition = data.list[i].weather[0].description;
// 				forecast.innerHTML += `
// 					<p>${date}: ${temp}°C, ${condition}</p>
// 				`;
// 			}
// 		})
// 		.catch(error => {
// 			weather.innerHTML = `<p>Error: ${error}</p>`;
// 		});
// });
