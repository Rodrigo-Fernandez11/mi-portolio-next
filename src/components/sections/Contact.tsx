'use client'
import React from "react";
import ContactForm from "../common/ContactForm";

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
export default ContactSection;
