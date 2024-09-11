import React from 'react';

const Weather = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="text-center bg-blue-500 border rounded-lg ">
      <h2 className="text-2xl font-bold text-gray-800 underline decoration-indigo-800 decoration-2 mb-3">Weather in {name}</h2>
      <p className="text-xl mb-1">Temperature: <span className="font-semibold">{main.temp}°C</span></p>
      <p className="text-xl mb-1">Weather: <span className="font-semibold ">{weather[0].description}</span></p>
      <p className="text-xl mb-1">Humidity: <span className="font-semibold">{main.humidity}%</span></p>
      <p className="text-xl mb-1">Wind Speed: <span className="font-semibold">{wind.speed} m/s</span></p>
    </div>
  );
};

export default Weather;
