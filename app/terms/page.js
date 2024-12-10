import React from 'react';
import Link from 'next/link';

const Terms = () => {
  return (
    <div className="container mx-auto px-5 py-24">
      <h1 className="text-5xl font-bold text-center mb-10 text-blue-600">
        Terms of Service
      </h1>
      <p className="text-lg text-gray-700 text-center mb-12">
        Please read these terms carefully before using WeatherX. Your access to and use of the service is conditioned on your acceptance of these terms.
      </p>

      <section className="bg-white shadow-lg rounded-lg p-8">
        {/* Introduction */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to WeatherX. These terms and conditions outline the rules and regulations for the use of our service. By accessing or using WeatherX, you agree to these terms. If you do not agree, please discontinue use immediately.
          </p>
        </div>

        {/* Agreement to Terms */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">2. Agreement to Terms</h2>
          <p className="text-gray-600">
            By using WeatherX, you affirm that you are at least 18 years old or have the consent of a legal guardian to use the service. Continued use constitutes your agreement to these terms.
          </p>
        </div>

        {/* Use of Services */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">3. Use of Services</h2>
          <p className="text-gray-600">
            Users are expected to:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>Use the service in compliance with all applicable laws and regulations.</li>
            <li>Not attempt to exploit, harm, or disrupt the service.</li>
            <li>Respect the rights and privacy of other users.</li>
          </ul>
        </div>

        {/* Account Responsibilities */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">4. Account Responsibilities</h2>
          <p className="text-gray-600">
            If you create an account with us, you are responsible for maintaining its confidentiality. You must notify us immediately of any unauthorized use or breach of security.
          </p>
        </div>

        {/* Intellectual Property */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">5. Intellectual Property</h2>
          <p className="text-gray-600">
            All content on WeatherX, including text, graphics, and logos, is the property of WeatherX. Unauthorized use, reproduction, or distribution of this content is strictly prohibited.
          </p>
        </div>

        {/* Termination */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">6. Termination</h2>
          <p className="text-gray-600">
            We reserve the right to suspend or terminate user accounts that violate these terms or engage in unlawful activities.
          </p>
        </div>

        {/* Liability Limitation */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">7. Limitation of Liability</h2>
          <p className="text-gray-600">
            WeatherX shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">8. Changes to Terms</h2>
          <p className="text-gray-600">
            We may revise these terms from time to time. Significant changes will be communicated via email or through the app.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">9. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns about these terms, feel free to contact us at:
          </p>
          <p className="mt-4 text-gray-600">
            Email:{" "}
            <Link href="mailto:support@weatherx.com">
              <span className="text-blue-500 underline cursor-pointer">
                support@weatherx.com
              </span>
            </Link>
          </p>
        </div>
      </section>

      <div className="text-center mt-12">
        <Link href="/">
          <span className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-600 transition duration-300 cursor-pointer">
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Terms;
