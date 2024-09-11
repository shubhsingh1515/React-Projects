
import React, { useState } from 'react';
import Weather from './weather';


const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_API_KEY;
    console.log("API Key:", apiKey);


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 flex items-center justify-center">
      <div className="bg-blue-600 p-8 rounded-lg shadow-lg w-full max-w-md ">
        <h1 className="text-4xl font-bold text-center mb-10">Weather Finder</h1>
        <form onSubmit={handleSearch} className="mb-4">
          <input 
            type="text" 
            placeholder="Enter city name" 
            value={city} 
            onChange={handleInputChange} 
            className="placeholder-blue-800 text-black w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-blue-500"
          />
          <button 
            type="submit" 
            className="w-full bg-green-500 font-bold text-blue p-3 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Get Weather
          </button>
        </form>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {weatherData && <Weather data={weatherData} />}
      </div>
    </div>
  );
};

export default App;
