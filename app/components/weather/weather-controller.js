function WeatherController() {
	//var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		console.log(weather)
		var template = ''
		// for (var key in weather) {
		// 	template += `<h2>${key}: </h2>` //${weather[key]}
		// 	if (typeof (weather[key]) == 'object') {
		// 		for (var jey in weather[key]) {
		// 			template += `<h6>${jey}: ${weather[key][jey]}</h6>`
		// 		}
		// 	}
			
		// }
		var tempInCelcius = weather.main.temp - 273.15;
		template += `
		<p> location: <span>${weather.name}</span></p>
		<p> temp: <span>C ${tempInCelcius.toFixed(2)}</span></p>
		<p> Sky: <span>${weather.weather[0].description}</span><img src="https://openweathermap.org/img/w/${weather.weather[0].icon}.png"></p>
		`

		document.getElementById('weather').innerHTML = template
		console.log(weather['name']);
		//$('#weather').hide();
		//What can you do with this weather object?
	})

}
