import React from "react";

const ContactForm = () => {
  return (
    <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
      <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
        যোগাযোগ ফর্ম
      </h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          নাম
        </label>
        <input
          id="name"
          placeholder="আপনার নাম লিখুন"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          type="text"
          name="name"
        ></input>
      </div>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          নাম্বার
        </label>
        <input
          id="name"
          placeholder="আপনার নাম্বার লিখুন"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          type="text"
          name="name"
        ></input>
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          বিবরণ
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="আপনার বিবরণ লিখুন"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg h-32 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full flex justify-center items-center gap-3 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300"
      >
        জমা দিন
      </button>
    </form>
  );
};

export default ContactForm;
