"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_6g8jmzh",
          "template_g8lj6fe",
          form.current,
          "QUaZ-NoYdehtvPNeP"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitted(true);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            setErrorMessage("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-5">
      <div>
        <label className="font-medium">Nombre Completo</label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Mensaje</label>
        <textarea
          required
          name="message"
          className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        ></textarea>
      </div>
      <button className="w-full px-4 py-2  font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
        Enviar
      </button>
      {isSubmitted && (
        <p className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md">
          Message sent successfully! 🎉
        </p>
      )}
      {errorMessage && (
        <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md">
          {errorMessage}
        </p>
      )}
    </form>
  );
};
