function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		document.getElementById('quote').innerText = quote.quote
		console.log('What is the quote', quote)
	})
}
