/******************************************
*****************************************/

/*** 
 * `quotes` array 
 *  assign quote with properties to every object
 *  assign objects to array
***/

q1={quote:"Stay hungry, stay foolish.",source:"Steve Jobs",citation:"washingtonpost",year:"2011"};
q2={quote:"Well done is better than well said.",source:"Benjamin Franklin",year:"1717"};
q3={quote:"Whenever you find yourself on the side of the majority, it is time to pause and reflect.",source:"Mark Twain",citation:" BrainyQuote.com"};
q4={quote:"Don’t count the days, make the days count.",source:"Muhammad Ali"};
q5={quote:"The future belongs to those who prepare for it today.",source:"Malcolm X"};
const quotes=[q1,q2,q3,q4,q5];


/***
 * `getRandomQuote` function
 *  generate randomNubmer
 *  return quote 
***/
function getRandomQuote(){
    let randomNumber=Math.floor(Math.random()*quotes.length);
    return quotes[randomNumber];
}


/***
 * `printQuote` function
 *  change HTML content of the target element 
***/
function printQuote(){
    let randomQuote=getRandomQuote();
    let PtoHTML1="<p class='quote'>"+randomQuote.quote+"</p>"+"<p class='source'>"+
    randomQuote.source;
    //
    if(randomQuote.citation!==undefined){
        PtoHTML1+="<span class='citation'>"+randomQuote.citation+
        "</span>";
    }
    if(randomQuote.hasOwnProperty('year')){
        PtoHTML1+="<span class='year'>"+randomQuote.year+
        "</span>";
    }
    PtoHTML1+="</p>";
    document.getElementById('quote-box').innerHTML=PtoHTML1;
}


/***
 * click event listener for the print quote button
 * when click event is triggered, call the pritQuote function

***/

document.getElementById('load-quote').addEventListener("click",printQuote);