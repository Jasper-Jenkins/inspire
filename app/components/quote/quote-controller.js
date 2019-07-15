function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		
		var template = ""
		template = `<p>${quote.quote.body}</p>
					<span id="quoteAuthor"> - ${quote.quote.author} - </span>
					`
		document.getElementById('quote').innerHTML = template;
		console.log('What is the quote', quote)
	})
}
