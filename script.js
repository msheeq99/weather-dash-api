let weather = {
  apiKey: "4e323e25a41eb88616b82e8715147146",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&limit&units=metrics=5&appid=4e323e25a41eb88616b82e8715147146"
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .then(
        fetch(
          "https://api.openweathermap.org/data/2.5/forecast?lat=39.7392&lon=-104.984&limit&units=metrics=5&appid=4e323e25a41eb88616b82e8715147146"
        )
          .then((data) => {
            return data.json();
          })
          .then((data) => {
            console.log(data);
            const forecastDivs = document.querySelectorAll(".forecast");
            for (let i = 0; i < forecastDivs.length; i++) {
              forecastDivs[i].innerHTML = "";
              const index = i * 8 + 4;
              const forecastDate = new Date(data.list[index].dt * 1000);
              const day = forecastDate.getDate();
              const month = forecastDate.getMonth() + 1;
              const year = forecastDate.getFullYear();
              const forecastDateHeader = document.createElement("h4");
              const forecastImg = document.createElement("img");
              const forecastTemp = document.createElement("p");
              const forecastWind = document.createElement("p");
              const forecastHum = document.createElement("p");
              forecastDateHeader.innerHTML =
                "(" + day + "/" + month + "/" + year + ")";
              forecastTemp.innerHTML =
                (data.list[index].main.temp - 273.15).toFixed(2) + "°C";
              forecastHum.innerHTML = data.list[index].main.humidity + "%";
              forecastWind.innerHTML = data.list[index].wind.speed + " MPH";
              forecastDateHeader.setAttribute("class", "forecastDateHeader");
              forecastImg.setAttribute(
                "src",
                "https://openweathermap.org/img/wn/" +
                data.list[index].weather[0].icon +
                "@2x.png"
                );
                forecastImg.setAttribute("class", "forecastImg");
                forecastTemp.setAttribute("class", "forecastTemp");
                forecastHum.setAttribute("class", "forecastHum");
                forecastWind.setAttribute("class", "forecastWind");
                forecastDivs[i].append(forecastDateHeader);
                forecastDivs[i].append(forecastImg);
                forecastDivs[i].append(forecastTemp);
                forecastDivs[i].append(forecastHum);
                forecastDivs[i].append(forecastWind);
            }
          })
      );
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText =
      (temp - 273.15).toFixed(2) + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " mp/h";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
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

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Denver");