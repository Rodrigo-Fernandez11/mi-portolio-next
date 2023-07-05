'use client'
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInformation />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const ContactInformation: React.FC = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Contact Information</h3>
        <ul className="space-y-2">
          <li>
            <span className="font-bold">Email:</span> yourname@example.com
          </li>
          <li>
            <span className="font-bold">Phone:</span> (123) 456-7890
          </li>
          <li>
            <span className="font-bold">Address:</span> 123 Main St, City, State
          </li>
          <li>
            <span className="font-bold">Website:</span>{" "}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              example.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="font-bold mb-1 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="font-bold mb-1 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="font-bold mb-1 block">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
