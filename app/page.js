import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>WeatherX - Your Ultimate Weather Assistant</title>
        <meta
          name="description"
          content="Stay updated with WeatherX - your go-to platform for real-time weather insights and forecasts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-5 py-24 flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">
            Welcome to WeatherX
          </h1>
          <p className="text-lg sm:text-xl text-center max-w-2xl mb-6">
            Your reliable assistant for real-time weather updates and forecasts.
          </p>
          <Link
            href="/weather"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300"
            aria-label="Explore WeatherX features"
          >
            Explore Now
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-12">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            What Our Users Are Saying
          </h2>
          <div className="flex flex-wrap -m-4">
            {[
              {
                name: "Emma Johnson",
                image: "https://randomuser.me/api/portraits/women/65.jpg",
                quote:
                  "WeatherX has been a lifesaver. I rely on it every day to plan my activities.",
              },
              {
                name: "Liam Brown",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
                quote:
                  "The accuracy and simplicity of WeatherX make it my go-to weather app.",
              },
              {
                name: "Sophia Williams",
                image: "https://randomuser.me/api/portraits/women/85.jpg",
                quote:
                  "A user-friendly design and reliable updates make WeatherX indispensable.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-4 lg:w-1/3 sm:w-1/2"
              >
                <div className="h-full bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition duration-300">
                  <div className="inline-block w-16 h-16 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="leading-relaxed text-base mt-2">
                    {`"${testimonial.quote}"`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About WeatherX Section */}
      <section className="text-gray-600 body-font bg-gray-100 py-16">
        <div className="container mx-auto px-5">
          <div className="lg:w-4/6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Discover WeatherX
            </h2>
            <p className="leading-relaxed text-lg mb-6 text-gray-700 text-center">
              Empower yourself with accurate, real-time weather updates and forecasts.
            </p>
            <div className="text-center">
              <Link
                href="/about"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300 inline-flex items-center"
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
