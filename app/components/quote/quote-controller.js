function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		var template = ""
		template = `<p>${quote.quote}</p>
					<span id="quoteAuthor"> - ${quote.author} - </span>
					`
		document.getElementById('quote').innerHTML = template
		// quote.quote
		// document.getElementById('quoteAuthor').innerText = quote.author
		console.log('What is the quote', quote)
	})
}
