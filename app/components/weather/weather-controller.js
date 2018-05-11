function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		console.log(weather)
		var template = ''
		for (var key in weather) {
			template += `<h2>${key}: </h2>` //${weather[key]}
			if (typeof (weather[key]) == 'object') {
				for (var jey in weather[key]) {
					template += `<h6>${jey}: ${weather[key][jey]}`
				}
			}
			
		}
		document.getElementById('weather').innerHTML = template
		console.log(weather['name']);
		//What can you do with this weather object?
	})

}
