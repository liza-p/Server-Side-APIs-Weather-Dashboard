function showForecast(res) {
    $("#forecast").html("");
    for(let i = 0; i<40; i+=8) {

        var cardDate = moment(res.list[i].dt * 1000).format('L');
        var cardIcon = res.list[i].weather[0].icon;
        var cardTemp = res.list[i].main.temp;
        var cardHumid =res.list[i].main.humidity;

        var dayDiv = $('<div>');
        var cardDiv = $('<div>');
        cardDiv.addClass("card text-white bg-primary p-2 mr-3");
        dayDiv.text(cardDate);
        var cardImg =$('<img>');
        cardImg.attr("src",`http://openweathermap.org/img/wn/${cardIcon}.png`);
        dayDiv.append(cardImg);
        var temDiv = $('<div>');
        temDiv.addClass("mb-2");
        dayDiv.append(temDiv);
        temDiv.text("Temp: " + cardTemp + "F");
        var humidDiv = $('<div>');
        humidDiv.text("Humidity: "  + cardHumid + "%");
        humidDiv.addClass("mb-2");
        dayDiv.append(humidDiv);
        cardDiv.append(dayDiv);
        
        $("#forecast").append(cardDiv);

    }

    
}


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
        cityDiv.addClass("mb-2");
        cityDiv.append(img);
        cityDiv.addClass("city")
        var tempDiv = $('<div>');
        tempDiv.addClass("mb-2");
        $(".card-body").append(tempDiv);
        tempDiv.text("Temperature: " + temperature + " F");
        var humDiv = $('<div>');
        humDiv.addClass("mb-2");
        $(".card-body").append(humDiv);
        humDiv.text("Humidity: " + humidity + " %");
        var windDiv = $('<div>');
        windDiv.addClass("mb-2");
        $(".card-body").append(windDiv);
        windDiv.text("Wind Speed: " + windSpeed + " MPH");

        showForecast(response);

        


    });
    
});