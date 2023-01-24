const weatherCardsContainer = $("#weatherContainer");

// Open weather API

// collect data from API

const collectCurrentData = function (name, forecastData) {
    return {
      name: name,
      temperature: forecastData.current.temp,
      wind: forecastData.current.wind_speed,
      humidity: forecastData.current.humidity,
      uvi: forecastData.current.uvi,
      date: collectFormattedDate(forecastData.current.dt, "ddd DD/MM/YYYY HH:mm"),
      iconCode: forecastData.current.weather[0].icon,
    };
  };
  
  const collectFormattedDate = function (unixTimestamp, format = "DD/MM/YYYY") {
    return moment.unix(unixTimestamp).format(format);
  };
  // forecast dta from api
  const collectForecastData = function (forecastData) {
    const callback = function (each) {
      return {
        date: collectFormattedDate(each.dt),
        temperature: each.temp.max,
        wind: each.wind_speed,
        humidity: each.humidity,
        iconCode: each.weather[0].icon,
      };
    };

    
  return forecastData.daily.slice(1, 6).map(callback);
};

