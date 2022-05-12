/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
var quotes = [{quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.", source:"Thomas A. Edison"},
              {quote:"It is only with the heart that one can see rightly; what is essential is invisible to the eye.", source: "Antoine de Saint-Exupéry", citation: "The Little Prince"},
              {quote: "I am no bird; and no net ensnares me: I am a free human being with an independent will, which I now exert to leave you.",source: "Charlotte Brontë",citation:"Jane Eyre"},
              {quote: "Beware; for I am fearless, and therefore powerful.", source: "Mary Shelley", citation: "Frankenstein", year: 1818},
              {quote: "The people who are crazy enough to think they can change the world are the ones who do", source: "Steve Jobs", year:2013}    
            ]; 


var previosQuote=null;

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
    let randomNumber= Math.floor(Math.random()*5);
    return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote(){

    // this is for checking if the quote is repeated. If the code is repeated, get random quote again
    do{
        var randomQuote= getRandomQuote();
        console.log(randomQuote.quote);
    } while (randomQuote==previosQuote);

    // After checking this quote is not repeated, the previous code will be renewed. PreviousQuote will be used when next time the random quote need to be checked. 
    previosQuote= randomQuote;


    let PtoHTML1 = "<p class='quote'>" + randomQuote.quote +"</p>"+"<p class='source'>"+ randomQuote.source;
    
    // start to check if citation and year are empty in quote object 
    let citation=""; 
    let year="";
    if ('citation' in randomQuote) {
        citation="<span class='citation'>"+randomQuote.citation+"</span>"
    } else {
        citation="";
    } 

    if ('year' in randomQuote) {
        year= "<span class='year'>"+randomQuote.year+"</span></p>"
    } else {
        year="</p>"
    }

    document.getElementById('quote-box').innerHTML = PtoHTML1+citation+year;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById("load-quote").addEventListener("click",printQuote);