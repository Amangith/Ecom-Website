import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            New Season Arrivals
            <br className="hidden lg:inline-block" />
            Coffee Mugs
          </h1>
          <p className="mb-8 leading-relaxed">
          An elegant coffee mug with sober designs is a perfect gift for the self-indulgent elderly woman you know.
           This beautiful mug has simple yet attractive designs, wishing Happy Birthday, with recipients' name and 
           photo on it.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Buy Now
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/products/p-personalized-ceramic-coffee-mug-9195-m.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;