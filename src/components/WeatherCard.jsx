function WeatherCard({ city, weather }) {
  if (!weather) return null;

  const { temperature, windspeed, weathercode, time } = weather.current_weather;

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p className="temp">{Math.round(temperature)}°C</p>
      <p>Wind: {windspeed} km/h</p>
      <p>Weather Code: {weathercode}</p>
      <p>Time: {new Date(time).toLocaleString()}</p>
    </div>
  );
}

export default WeatherCard;
