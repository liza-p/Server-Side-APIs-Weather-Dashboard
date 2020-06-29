$("#search").on("click",function(event){
    event.preventDefault();
    
    var cityName = $("#city-input").val().trim();
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=5dcc67fe4c268492bfaa960cb32d8382&units=imperial`
   
    

   

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response){


        console.log(response)
        var temperature = response.list[0].main.temp;
        var humidity = response.list[0].main.humidity;
        var windSpeed = response.list[0].wind.speed;
        var weatherIcon = response.list[0].weather[0].icon;
        var img =$('<img>');
        img.attr("src",`http://openweathermap.org/img/wn/${weatherIcon}.png`)

        var cityDiv = $('<div>');
        $(".card-body").html("");
        $(".card-body").append(cityDiv);
        var date = moment(response.list[0].dt * 1000).format('L');
        cityDiv.text(cityName + " " + "(" + date + ")");
        cityDiv.append(img);
        cityDiv.addClass("city")
        var tempDiv = $('<div>');
        $(".card-body").append(tempDiv);
        tempDiv.text("Temperature: " + temperature + " F");
        var humDiv = $('<div>');
        $(".card-body").append(humDiv);
        humDiv.text("Humidity: " + humidity + " %");
        var windDiv = $('<div>');
        $(".card-body").append(windDiv);
        windDiv.text("Wind Speed: " + windSpeed + " MPH");

        



    });
    
});