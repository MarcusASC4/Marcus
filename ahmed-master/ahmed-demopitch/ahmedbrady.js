// var apiURL= "https://api-hoaxy.p.mashape.com/articles";

// $.ajax({
//     url:apiURL, 
//     success:function(data){
//         myFunction(data);
//     }
// });

// function myFunction(data){
//     var articleURL = data.articles[0].canonical_url;
//     var title = data.articles[0].title;
//     var site_type = data.articles[0].site_type;
//     $("body").append("<h2>"+title+"</h2>");
//     $("body").append("<p>"+site_type+"</p>");
//     $("body").append("<a href="+articeURL+"> read here </a>");
// }
function rand(upperBd){
    return Math.floor(Math.random()*upperBd);
}

var websites = ["http://theconspiracyblog.com/conspiracies","http://www.atlanteanconspiracy.com/search/label/Alex%20Jones","http://sonarz.com/"];

function randomWebsite(){
    $("body").append("<a href="+websites[rand(websites.length)]+"><button>See Theory</button></a>"); 
}

console.log(randomWebsite());
