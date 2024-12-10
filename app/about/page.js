import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-5 py-24">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-600">
        About WeatherX
      </h1>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-800">
              What is WeatherX?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              WeatherX is your ultimate weather assistant, providing accurate
              and real-time updates for cities around the world. Stay informed,
              plan your day with confidence, and experience weather updates like
              never before.
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Key Features
            </h2>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-gray-100 p-8 rounded hover:bg-indigo-100 transition duration-300">
                  <h3 className="text-xl font-medium text-indigo-600 mb-3">
                    Real-Time Updates
                  </h3>
                  <p className="text-gray-600">
                    Get instant weather data for your location or any city
                    worldwide. Stay ahead with accurate forecasts.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-gray-100 p-8 rounded hover:bg-indigo-100 transition duration-300">
                  <h3 className="text-xl font-medium text-indigo-600 mb-3">
                    Multiple City Tracking
                  </h3>
                  <p className="text-gray-600">
                    Monitor weather conditions in Edmonton, Toronto, NYC, and
                    beyond. A must-have for global travelers and planners.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-gray-100 p-8 rounded hover:bg-indigo-100 transition duration-300">
                  <h3 className="text-xl font-medium text-indigo-600 mb-3">
                    Simple and Intuitive
                  </h3>
                  <p className="text-gray-600">
                    Enjoy a clean and user-friendly interface powered by
                    TailwindCSS. Designed for ease of use and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Technology Stack
            </h2>
            <p className="text-center mt-4 text-lg text-gray-600">
              WeatherX is built using cutting-edge technologies like{' '}
              <strong>React</strong>, <strong>TailwindCSS</strong>, and{' '}
              <strong>WeatherAPI</strong>. These ensure speed, responsiveness,
              and accuracy for a seamless experience.
            </p>
          </div>

          {/* Minimal Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold text-gray-800">Meet the Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              The dedicated team behind WeatherX:
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-lg font-medium text-indigo-600">Rajvir Singh Jhangria</p>
              <p className="text-lg font-medium text-indigo-600">Gurpesh Singh</p>
              <p className="text-lg font-medium text-indigo-600">Jawad Latif</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a
              href="/weather"
              className="text-white bg-blue-500 border-0 py-3 px-8 rounded-lg focus:outline-none hover:bg-blue-600 transition duration-300"
            >
              Explore WeatherX
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
