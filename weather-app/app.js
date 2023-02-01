const location = document.getElementById('location');
const search = document.getElementById('search');
const weather = document.getElementById('weather');
const API_KEY = 'YOUR_API_KEY';

search.addEventListener('click', function () {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${API_KEY}`)
		.then(response => response.json())
		.then(data => {
			const currentWeather = data.weather[0].description;
			const currentTemp = Math.round(data.main.temp - 273.15);
			weather.innerHTML = `
				<p>Current weather: ${currentWeather}</p>
				<p>Current temperature: ${currentTemp}°C</p>
			`;
		})
		.catch(error => {
			weather.innerHTML = `<p>Error: ${error}</p>`;
		});
});