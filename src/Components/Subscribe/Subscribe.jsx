import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-10 bg-slate-700 dark:bg-gray-800 "
    >
      <div className="container backdrop-blur-sm py-10 ">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <div className="flex gap-4">
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter Your Name"
            className="w-full p-3 text-black"
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 text-black"
          />
          
          </div>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter About the Product "
            className="w-full p-3 text-black "
          />
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Any Feedback"
            className="w-full p-3 text-black"
          />
           <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-5 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
