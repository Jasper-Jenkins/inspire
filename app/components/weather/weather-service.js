function WeatherService() {
    var apiUrl = '//bcw-sandbox.herokuapp.com/api/weather'; // /?url=';
   // var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35';
   // var apiUrl = url + encodeURIComponent(url2);

	this.getWeather = function (callWhenDone) {
		//@ts-ignore
        $.get(apiUrl, function (res) {
            console.log(res);
          //  res = JSON.parse(res)
          //  localStorage.setItem('weather', JSON.stringify(res))
            // HEY FUN FACT 
            // Have you ever wanted to know the temperature measured in kelvin?
            // You should probably convert the temperature data
            callWhenDone(res)
        });
    }
}
