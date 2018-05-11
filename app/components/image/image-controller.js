function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?

	var imageService = new ImageService(drawImage)

	function drawImage (res){
		console.log(res)
		document.getElementById('body').style.backgroundImage = `url('${res.large_url}')`
	}
	
	function getImage(){
		imageService.getImage(drawImage)
	}
	getImage()
	
}


