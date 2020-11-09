function getQuote() {
	// Create the arrays
	var quotes = new Array(4);
	var sources = new Array(4);

	// Initialize the arrays with quotes
	quotes[0] = 'Our feelings are our most genuine path to knowledge.';
	sources[0] = 'Anonymous';

	quotes[1] =
		"If you don't like the road you're walking, " + 'start paving another one.';
	sources[1] = 'Dolly Parton';

	quotes[2] =
		'The most difficult thing is the decision to act, ' +
		'the rest is merely tenacity.';
	sources[2] = 'Amelia Earhart';

	quotes[3] = "What's another word for thesaurus?";
	sources[3] = 'Steven Wright';

	// Get a random index into the arrays
	i = Math.floor(Math.random() * quotes.length);

	// Write out the quote as HTML
	//document.write("<p style='background-color: #ffb6c1; text-align:center'>\"");
	document.write(quotes[i] + '"');
	document.write('<em>- ' + sources[i] + '</em>');
	//document.write('</p>');
}
