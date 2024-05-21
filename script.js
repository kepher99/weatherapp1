const apiKey = "7686253196bd620e22e4a52cadbfe6b6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

SearchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if(location){
    fetchWeather(location);
  }else{
    alert("Please enter a location!")
  }
});

function fetchWeather(location){
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
      .then((response) => response.json())
      .then((data) => {
        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}C`;
        descriptionElement.textContent = data.weather[0].description;
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
}