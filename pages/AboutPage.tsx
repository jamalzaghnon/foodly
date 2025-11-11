
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://picsum.photos/seed/about-hero/1920/1080" alt="Team working" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Our Mission</h1>
          <p className="mt-6 text-xl text-indigo-100">“We connect people with food they love — quickly, safely, and sustainably.”</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[#FF4B3E]">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                Foodly was born from a simple idea: to make great local food accessible to everyone in the Gulf region. We started in a small office with a big dream, partnering with a handful of beloved local restaurants. Today, we're proud to serve thousands of customers daily, bringing the rich, diverse flavors of our cities right to their doorsteps.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We're more than just a delivery app. We're a community of food lovers, dedicated to supporting local businesses and creating a seamless, joyful experience for our users. From the restaurant kitchen to your dining table, we handle every step with care and a personal touch.
              </p>
            </div>
            <div className="order-first md:order-last">
              <img src="https://picsum.photos/seed/story-image/600/500" alt="Foodly founders" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Supporting Local Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold">Supporting Local Restaurants</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Our restaurant partners are the heart of our business. We provide them with the tools, technology, and customer base to thrive in the digital age, helping them reach new audiences and grow their businesses sustainably.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6">
                    <h3 className="text-5xl font-extrabold text-[#FF4B3E]">500+</h3>
                    <p className="mt-2 font-semibold text-gray-700">Restaurant Partners</p>
                </div>
                 <div className="p-6">
                    <h3 className="text-5xl font-extrabold text-[#FF4B3E]">1M+</h3>
                    <p className="mt-2 font-semibold text-gray-700">Orders Delivered</p>
                </div>
                 <div className="p-6">
                    <h3 className="text-5xl font-extrabold text-[#FF4B3E]">6</h3>
                    <p className="mt-2 font-semibold text-gray-700">Cities Served</p>
                </div>
                 <div className="p-6">
                    <h3 className="text-5xl font-extrabold text-[#FF4B3E]">98%</h3>
                    <p className="mt-2 font-semibold text-gray-700">Partner Satisfaction</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
