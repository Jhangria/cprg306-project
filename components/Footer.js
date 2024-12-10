import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex-shrink-0 text-center md:text-left">
          <a className="flex title-font font-medium items-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">WeatherX</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">Your weather companion.</p>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 mt-4">
          <Link href="/privacy" className="text-gray-500 hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-gray-900">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-gray-900">
            Contact
          </Link>
        </div>
        <p className="text-gray-500 text-sm text-center mt-4 md:mt-0">
          © 2024 WeatherX — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
