var myID= "43ec79a0"
var myKey="2f77786e165114e439647e2d9e707877"
var bigmacURL = "https://api.nutritionix.com/v1_1/search/big%20mac?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId="+myID+"&appKey="+myKey;  

$.ajax({
    url:bigmacURL,
    success: function(data){
            //console.log(data); 
            var food= data.hits[0]; 
            var name= food.fields.item_name; 
            var cals= food.fields.nf_calories; 

            $("body").append("<h2>This "+ name+"has "+ cals + "cals!</h2>"); 
            }
}); 





































































