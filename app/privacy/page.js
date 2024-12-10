import React from 'react';
import Link from 'next/link';

const Privacy = () => {
  return (
    <div className="container mx-auto px-5 py-24">
      <h1 className="text-5xl font-bold text-center mb-10 text-blue-600">
        Privacy Policy
      </h1>
      <p className="text-lg text-gray-700 text-center mb-12">
        At WeatherX, your privacy is our priority. Learn how we collect, use, and protect your data.
      </p>

      <section className="bg-white shadow-lg rounded-lg p-8">
        {/* Data Collection Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">1. Information We Collect</h2>
          <p className="text-gray-600">
            We collect information to improve your experience with WeatherX. This includes:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>Personal details like name, email address, and location (if provided).</li>
            <li>Technical data such as IP addresses, browser type, and device information.</li>
          </ul>
        </div>

        {/* Data Usage Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">2. How We Use Your Information</h2>
          <p className="text-gray-600">
            The data we collect is used to:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>Deliver accurate weather updates and forecasts.</li>
            <li>Personalize your experience.</li>
            <li>Analyze app performance to improve our services.</li>
          </ul>
        </div>

        {/* Data Sharing Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">3. Sharing Your Information</h2>
          <p className="text-gray-600">
            We do not sell your personal data. Your information may be shared only in the following scenarios:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>To comply with legal obligations.</li>
            <li>With trusted third-party services like analytics platforms.</li>
          </ul>
        </div>

        {/* User Rights Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">4. Your Rights</h2>
          <p className="text-gray-600">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>Access, update, or delete your data.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
          <p className="mt-4 text-gray-600">
            To exercise these rights, contact us at the email below.
          </p>
        </div>

        {/* Security Measures Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">5. How We Protect Your Data</h2>
          <p className="text-gray-600">
            We take security seriously. Your data is protected through:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>Encryption of sensitive information.</li>
            <li>Secure storage on trusted servers.</li>
          </ul>
          <p className="mt-4 text-gray-600">
            However, no online system is entirely secure, and we cannot guarantee complete protection.
          </p>
        </div>

        {/* Changes to Privacy Policy Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">6. Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Significant changes will be communicated through email or app notifications.
          </p>
        </div>

        {/* Contact Information Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">7. Contact Us</h2>
          <p className="text-gray-600">
            Have questions or concerns about this Privacy Policy? Reach out to us:
          </p>
          <p className="mt-4 text-gray-600">
            Email:{' '}
            <a
              href="mailto:support@weatherx.com"
              className="text-blue-500 underline"
            >
              support@weatherx.com
            </a>
          </p>
        </div>
      </section>

      <div className="text-center mt-12">
        <Link
          href="/"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-600 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Privacy;
