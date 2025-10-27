// Fetch latitude and longitude of a city
export async function geocodeCity(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("City lookup failed");
  const data = await res.json();
  if (!data.results || data.results.length === 0) throw new Error("City not found");
  return data.results[0];
}

// Fetch current weather for given coordinates
export async function getCurrentWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather fetch failed");
  return res.json();
}

// Provide an explicit default export to avoid runtime ESM resolution
// issues in some dev environments. Named exports are already declared
// above with `export function ...`, so do not re-export them here.
export default { geocodeCity, getCurrentWeather };
