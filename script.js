const api_url = "https://api.quotable.io/random";
async function getquote(url){
    const response = await fetch(url);
    var data = await response.json(); 
    const quote = document.getElementById("quote")
    quote.innerHTML = data.content;
    const author = document.getElementById("author")
    author.innerHTML = data.author;
}
getquote(api_url);
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" +quote.innerHTML + "---- by" + author.innerHTML, + "Tweet Window" , "width=600 , height=300")
}