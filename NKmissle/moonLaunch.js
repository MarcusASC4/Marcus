var planetURL = "https://swapi.co/api/planets/1/";  


 $( document ).ready(function() {
     $( "#button" ).click(function() {
  $(".nk").toggle(); 
  setTimeout(function(){ (".nk").toggle(); }, 4000);

});

    
});
$.ajax({
    url:planetURL,
    success: function(data){
            //console.log(data); 
            var name= data.name; 
            var climate= data.climate;  
            var pop= data.population; 
            var ter=data.terrain; 

            $("article").append("<h2>Planet: " +name+"</h2>");  
            $("article").append("<p>This planet's terrain is primarily "+ter+".</p>"); 
            $("article").append("<h2>Climate: "+climate+"</h2>"); 
            $("article").append("<p>This planet's climate is primarily "+climate+".</p>");
           $("article").append("<h2>Planet: " +pop+"</h2>");
           $("article").append("<p>This planet's population is approximately "+pop+".</p>");
}})


