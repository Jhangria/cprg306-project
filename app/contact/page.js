'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-5 py-24">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-600">
        Contact Us
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        We would love to hear from you! Reach out with your feedback or questions.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Contact Form */}
        <div className="md:w-1/2 mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
          {submitted && (
            <p className="text-green-600 mb-4 transition-opacity duration-500 opacity-100">
              Thank you for contacting us! We will get back to you soon.
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-shadow duration-300`}
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-shadow duration-300`}
                placeholder="Your Email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-shadow duration-300`}
                placeholder="Your Message"
                rows="5"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform hover:scale-105 active:scale-95 duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reach Us At</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-800">Email:</span>{' '}
              <span className="text-indigo-600">support@weatherx.com</span>
            </li>
            <li>
              <span className="font-semibold text-gray-800">Phone:</span>{' '}
              <span className="text-indigo-600">+1 (234) 567-890</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
