"use client";

import React, { useState } from "react";
import { Typography, Button, IconButton } from "@material-tailwind/react";
import { Send } from "lucide-react";
import Map from "./map";

const ContactUs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`https://formcarry.com/s/${process.env.NEXT_PUBLIC_FORMCARRY_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        throw new Error(data.message || "Form submission failed");
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="flex w-[95%] py-10 mb-5 md:mb-20 flex-col justify-center items-center bg-gray-900 max-w-7xl mx-auto rounded-2xl p-5 text-white"
    >
      <div className="w-full h-[400px]">
        <Map />
      </div>
      <div className="container mx-auto px-1 md:px-5 pb-5">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
            Contact Us
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to reach out to us! Whether you have a question, feedback,
            or need something from us.
          </p>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-2/2">
          {isSuccess && (
            <div className="mb-4 text-green-500 text-center">
              Thank you for your message! We will get back to you soon.
            </div>
          )}
          {error && (
            <div className="mb-4 text-red-500 text-center">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="m-2 flex flex-wrap">
            <div className="w-full py-2 md:px-2">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                >
                  Name
                </label>
              </div>
            </div>
            <div className="w-1/2 py-2 md:px-2">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                >
                  Email
                </label>
              </div>
            </div>
            <div className="w-1/2 py-2 pl-2 md:px-2">
              <div className="relative">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder="Phone"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                >
                  Phone
                </label>
              </div>
            </div>
            <div className="mt-4 w-full py-2 md:px-2">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                >
                  Message
                </label>
              </div>
            </div>
            <div className="w-full py-2 md:px-2">
              <button
                type="submit"
                className="mx-auto flex justify-center items-center rounded border-0 bg-cyan-500 py-2 px-8 text-lg text-white hover:bg-cyan-600 focus:outline-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
