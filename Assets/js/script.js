const weatherCardsContainer = document.querySelector("#weather-dashboard");


// Open weather API

// collect data from API

//const collectCurrentData = function (name, forecastData) {
   // return {
      //name: name,
      //temperature: forecastData.current.temp,
      //wind: forecastData.current.wind_speed,
      //humidity: forecastData.current.humidity,
      //uvi: forecastData.current.uvi,
      //date: collectFormattedDate(forecastData.current.dt, "ddd DD/MM/YYYY HH:mm"),
     // iconCode: forecastData.current.weather[0].icon,
   // };
  //};
  
 // const collectFormattedDate = function (unixTimestamp, format = "DD/MM/YYYY") {
   // return moment.unix(unixTimestamp).format(format);
  //};
  // forecast dta from api
 // const collectForecastData = function (forecastData) {
   // const callback = function (each) {
      //return {
       // date: collectFormattedDate(each.dt),
        //temperature: each.temp.max,
        //wind: each.wind_speed,
        //humidity: each.humidity,
       // iconCode: each.weather[0].icon,
    //  };
   // };

    
  //return forecastData.daily.slice(1, 6).map(callback);
//};




let weather = {
  apiKey: "04b3d357a14907eeb4df2fa9bad23dd9",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=0&lon=0&appid=04b3d357a14907eeb4df2fa9bad23dd9&city=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          //throw new Error("");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
      const icon = '01n'
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  
  
    
      searchButton.addEventListener("click", function () {
        const searchTerm = inputValue.value;
        weatherSearch(searchTerm);
        searchHistory.push(searchTerm);
        localStorage.setItem("search-bar", JSON.stringify(searchHistory));
        renderSearchHistory();
        searchHistoryLengthControl()
      });
    
  }
  
  
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("city");