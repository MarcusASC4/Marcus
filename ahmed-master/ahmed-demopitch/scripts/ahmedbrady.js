var unirest = requirejs('unirest');

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

unirest.get("https://api-hoaxy.p.mashape.com/articles?query=pizzagate+AND+date_published%3A%5B2016-10-28+TO+2016-12-04%5D&sort_by=relevant&use_lucene_syntax=false")
.header("X-Mashape-Key", "bsxy8MSkiqmshdODfQ5Xx3dyOuGZp1IpZK7jsnT5wjTJguGLPq")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});