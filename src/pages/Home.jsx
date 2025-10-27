import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { geocodeCity, getCurrentWeather } from "../api/openMeteo";

function Home() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const geo = await geocodeCity(cityName);
      const weatherData = await getCurrentWeather(geo.latitude, geo.longitude);
      setCity(`${geo.name}, ${geo.country}`);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <h1>🌤 Weather Now</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard city={city} weather={weather} />}
    </div>
  );
}

export default Home;
