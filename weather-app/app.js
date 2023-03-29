const myLocation = document.getElementById('location');
const search = document.getElementById('search');
const weather1 = document.getElementById('weather');
const API_KEY = '515366407936f5cc978258aaf52980fc';

// To add a search box to the weather application
search.addEventListener('click', function () {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myLocation.value}&appid=${API_KEY}`)
		.then(data => data.json())
		.then(data => {
			const locationCoordinates = data.coord;
			const currentWeather = data.weather[0].description;
			const currentTemp = Math.round(data.main.feels_like - 273.15);
			const currentPressue = data.main.pressure;
			const currentHumidity = data.main.humidity;
			const currentWind = data.wind.speed;
			weather1.innerHTML = `
				<h2>Location: ${myLocation.value}</h2>
				<p>Current weather: ${currentWeather}</p>
				<p>Current temperature: ${currentTemp}°C</p>
				<p>Current pressure: ${currentPressue} hPa</p>
				<p>Current humidity: ${currentHumidity}%</p>
				<p>Current wind: ${currentWind} m/s</p>
			`;
		})
		.catch(error => {
			weather1.innerHTML = `<p>Error: ${error}</p>`;
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
