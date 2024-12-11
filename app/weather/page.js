'use client';

import { useState, useEffect } from 'react';

const Weather = () => {
  const [event, setEvent] = useState('');
  const [edmonton, setEdmonton] = useState();
  const [toronto, setToronto] = useState();
  const [nyc, setNyc] = useState();
  const [weather, setWeather] = useState();
  const [error, setError] = useState(null); // State to track error messages

  const fetchWeather = async (event) => {
    try {
      const weather = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=50a8f093542045308dd184124240912&q=${event}`
      );

      const response = await weather.json();

      // Check for errors in the API response
      if (response.error) {
        setError(response.error.message); // Set error message for UI
        return null;
      }

      // Clear any existing errors on success
      setError(null);
      return response;
    } catch (err) {
      const errorMessage =
        err.message || 'An unexpected error occurred while fetching weather data.';
      setError(errorMessage); // Update error state for UI
      return null; // Do not log the error in the console
    }
  };

  useEffect(() => {
    async function fetchData() {
      let edmonton = await fetchWeather('Edmonton');
      setEdmonton(edmonton);

      let toronto = await fetchWeather('Toronto');
      setToronto(toronto);

      let nyc = await fetchWeather('New York');
      setNyc(nyc);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setEvent(e.target.value);
    if (e.target.value.length <= 0) {
      setWeather(undefined);
      setError(null); // Clear error when input is cleared
    }
  };

  const handleClick = async () => {
    setError(null); // Clear previous errors
    let w = await fetchWeather(event);
    if (w) {
      setWeather(w);
    }
  };

  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                WeatherX
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Search for a Location and we will fetch the weather for you
              </p>
              <input
                value={event}
                onChange={handleChange}
                className="w-full rounded-md border-blue-700 py-1 border-2 m-2"
                type="text"
                name="search"
                id="search"
                placeholder="Enter Location"
              />
              <button
                onClick={handleClick}
                className="text-white mx-3 bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
              >
                Search Weather
              </button>
            </div>

            {/* Show Error Message */}
            {error && (
              <div className="text-red-500 mb-6">
                <p>{error}</p>
              </div>
            )}

            {/* Show Weather Data */}
            {weather && event.length > 0 && !error && (
              <div className="mb-6">
                The weather of {event} is {weather.current.temp_c} &#8451; and
                the wind speed is {weather.current.wind_mph} mph.
              </div>
            )}
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="Edmonton"
                  width={300}
                  height={400}
                  className="object-cover object-center h-full w-full"
                  src="https://media.istockphoto.com/id/1279220699/photo/skyline-of-downtown-edmonton-alberta-canada-at-twilight.jpg?b=1&s=170667a&w=0&k=20&c=xVBeSRs0ECrOqWFb2m7FsdN7KLtuMpQm38KD0tweVio="
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Edmonton ({edmonton && edmonton.current?.temp_c} &#8451;)
              </h2>
              {edmonton && (
                <p className="text-base leading-relaxed mt-2">
                  The weather in Edmonton is {edmonton.current.temp_c}°C, and the wind speed is {edmonton.current.wind_mph} mph.
                </p>
              )}
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="Toronto"
                  height={400}
                  width={300}
                  className="object-cover object-center h-full w-full"
                  src="https://plus.unsplash.com/premium_photo-1697730077744-5d2ae518fc13?blend=000000&blend-alpha=10&blend-mode=normal&blend-w=1&crop=faces%2Cedges&h=630&mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAxOTIwOTE1fA&ixlib=rb-4.0.3"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Toronto ({toronto && toronto.current?.temp_c} &#8451;)
              </h2>
              {toronto && (
                <p className="text-base leading-relaxed mt-2">
                  The weather in Toronto is {toronto.current.temp_c}°C, and the wind speed is {toronto.current.wind_mph} mph.
                </p>
              )}
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="New York"
                  width={300}
                  height={400}
                  className="object-cover object-center h-full w-full"
                  src="https://images.unsplash.com/photo-1570304816841-906a17d7b067?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMHNreWxpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                New York ({nyc && nyc.current?.temp_c} &#8451;)
              </h2>
              {nyc && (
                <p className="text-base leading-relaxed mt-2">
                  The weather in NYC is {nyc.current.temp_c}°C, and the wind speed is {nyc.current.wind_mph} mph.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weather;
