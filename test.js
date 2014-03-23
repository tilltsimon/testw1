

console.log( "Hello there!" );
	// When you start a line with two slashes like this, it is a "comment" for explaining
	// things or leaving yourself notes.  The line above writes a message to the console.
	// You can open up your console (option-command-I on a Mac) and choose the console
	// to see your messages displayed.  This very useful when you are debugging code, so
	// you can print messages to the console to tell you when things are happening.


// We can use jquery to run a function when the document is ready -- that means that 
// the browser has finished downloading all of the document, so now we can manipulate
// it.  The $ is a special symbol that means "jquery".
$( document ).ready(function() {
    console.log( "The document is ready!" );

    // In javascript, we can use a special function to call another function
    // every so many milliseconds.  Here, I'm going to call a function called 
    // "doCoolStuff" every 1 second (that's 1000 milliseconds!)
    setInterval( doCoolStuff, 1000 );
});

var colors = [ "red", "green", "blue" ];
	// an array is a list of items that you can pick from with an index.  
	// the first index is always 0 - so those indices above are 0,1,2
var count  = 0;
	// we're going to track each time we call our function below.

function doCoolStuff() {
	count += 1;
		// add 1 to the counter

	// We're going to look at the color of the first letter, and change it.
	// We can find elements in our page by using a selector.  I'm going to ask
	// for all objects that have the class "text1"

	var myElements = $( '.text1' );
		// see how we use the "dot" in front of the name, just like in CSS, to specify a class?

	// Let's set the color:
	var color = colors[ count % 3 ];
		// the % means 'modulo' - this is like saying, what is the remainer if you divide by 3?
		// This way, no matter how big count gets, count % 3 is always either 0, 1, or 2, and we
		// can use this to pick a color from the array.

	$(myElements).css( "color", color );

	// Let's print it to the console so we can verify what we're telling it to do:
	console.log( "On interation " + count + ", the color was set to " + color );
}