async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'f7892515fea5f5f09dea103574f249bb' ; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        document.querySelector('.weather-info').style.display = 'block';
      } else {
        alert('City not found');
      }
    } catch (error) {
      alert('Error fetching weather data');
    }
  }


  