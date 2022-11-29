const weatherCardsContainer = $("#weather-cards-container");

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
  