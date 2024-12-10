import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>WeatherX - Your Weather Assistant</title>
        <meta
          name="description"
          content="Stay updated with WeatherX - your ultimate weather assistant."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative text-white bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-5 py-24 flex flex-col items-center justify-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">
            WeatherX - Stay Connected to the Weather
          </h1>
          <p className="text-lg sm:text-xl text-center max-w-2xl mb-6">
            Your trusted platform for real-time weather updates and forecasts.
          </p>
          <Link
            href="/weather"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300"
            aria-label="Get Started with WeatherX"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3 sm:w-1/2">
              <div className="h-full bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                <div className="inline-block w-16 h-16 rounded-full bg-gray-200 mb-4">
                  <Image
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Emma Johnson"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Emma Johnson</h3>
                <p className="leading-relaxed text-base mt-2">
                  "WeatherX has been a lifesaver. I rely on it every day to plan my activities."
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 sm:w-1/2">
              <div className="h-full bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                <div className="inline-block w-16 h-16 rounded-full bg-gray-200 mb-4">
                  <Image
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Liam Brown"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Liam Brown</h3>
                <p className="leading-relaxed text-base mt-2">
                  "The accuracy and simplicity of WeatherX make it my go-to weather app."
                </p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 sm:w-1/2">
              <div className="h-full bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                <div className="inline-block w-16 h-16 rounded-full bg-gray-200 mb-4">
                  <Image
                    src="https://randomuser.me/api/portraits/women/85.jpg"
                    alt="Sophia Williams"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800">Sophia Williams</h3>
                <p className="leading-relaxed text-base mt-2">
                  "A user-friendly design and reliable updates make WeatherX indispensable."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About WeatherX Section */}
      <section className="text-gray-600 body-font bg-gray-100 py-16">
        <div className="container mx-auto px-5">
          <div className="lg:w-4/6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              About WeatherX
            </h2>
            <p className="leading-relaxed text-lg mb-6 text-gray-700 text-center">
              Stay informed with WeatherX, your trusted platform for accurate, real-time weather
              updates and forecasts.
            </p>
            <div className="text-center">
              <Link
                href="/about"
                className="text-white bg-blue-500 py-2 px-6 rounded hover:bg-blue-600 transition duration-300 inline-flex items-center"
                aria-label="Learn more about WeatherX"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
