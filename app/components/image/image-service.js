function ImageService(callWhenDone) {
	var apiUrl = '//bcw-sandbox.herokuapp.com/api/images'; // /?url=';
//	var url2 = 'http://www.splashbase.co/api/v1/images/random'
//	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		// ^^^^^^^ How do you call this function?
		//@ts-ignore
		return $.get(apiUrl, function (res) {
		//	res = JSON.parse(res)
			console.log('Image Data:', res)
			callWhenDone(res)
		})
	}
	
}
