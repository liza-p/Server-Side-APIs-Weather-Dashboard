$("#search").on("click",function(event){
    event.preventDefault();
    
    var cityName = $("#city-input").val().trim();
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=390e82129ad1eb59f8997081c28685d0`

   

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response){


        console.log(response)

    });
    
});