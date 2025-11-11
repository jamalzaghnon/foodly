
import React from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANTS, CUISINES } from '../constants';
import { Restaurant, Cuisine } from '../types';
import { StarIcon, ClockIcon, MotorcycleIcon, AppStoreBadge, GooglePlayBadge } from '../components/IconComponents';

const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({ restaurant }) => (
  <Link to={`/restaurant/${restaurant.id}`} className="block w-80 md:w-96 flex-shrink-0 mr-6 snap-start">
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <div className="h-48 overflow-hidden">
        <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
        <p className="text-gray-500">{restaurant.cuisine}</p>
        <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="font-bold">{restaurant.rating}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 text-gray-400 mr-1" />
            <span>{restaurant.deliveryTime} min</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const CuisineCard: React.FC<{ cuisine: Cuisine }> = ({ cuisine }) => (
  <div className="text-center group">
    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
      <img src={cuisine.imageUrl} alt={cuisine.name} className="w-full h-full object-cover" />
    </div>
    <h3 className="mt-4 text-lg font-bold text-gray-700">{cuisine.name}</h3>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/hero-food/1920/1080')` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">Your food. Fast. <span className="text-[#FF4B3E]">With a smile.</span></h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl">أهلاً بك في فودلي! The best meals from your favorite local restaurants, delivered hot and fresh to your door.</p>
          <div className="mt-10 w-full max-w-2xl bg-white p-4 rounded-full shadow-2xl flex items-center space-x-2">
            <input type="text" placeholder="Enter your location to find restaurants" className="w-full bg-transparent text-gray-700 focus:outline-none px-4" />
            <Link to="/restaurants" className="bg-[#FF4B3E] text-white py-3 px-8 rounded-full font-bold hover:bg-red-600 transition-colors duration-300 flex-shrink-0">
              Find Food
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <MotorcycleIcon className="w-16 h-16 mx-auto text-[#FF4B3E]" />
            <h3 className="mt-4 text-2xl font-bold">Fast Delivery</h3>
            <p className="mt-2 text-gray-600">We pride ourselves on speed. Get your food while it's still hot.</p>
          </div>
          <div className="p-6">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-[#FF4B3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z" /></svg>
            <h3 className="mt-4 text-2xl font-bold">Local Support</h3>
            <p className="mt-2 text-gray-600">Friendly customer service that speaks your dialect. We're here for you.</p>
          </div>
          <div className="p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto text-[#FF4B3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            <h3 className="mt-4 text-2xl font-bold">Smart AI</h3>
            <p className="mt-2 text-gray-600">Personalized recommendations that know what you're craving.</p>
          </div>
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center">Featured Restaurants</h2>
          <p className="text-center text-gray-600 mt-2">Handpicked for you, from local gems to popular chains.</p>
        </div>
        <div className="mt-10">
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 pl-4 sm:pl-6 lg:pl-8 no-scrollbar">
            {RESTAURANTS.slice(0, 5).map(r => <RestaurantCard key={r.id} restaurant={r} />)}
          </div>
        </div>
      </section>
      
      {/* AI Personalization Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://picsum.photos/seed/ai-mockup/600/500" alt="AI Feature" className="rounded-2xl shadow-xl"/>
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold">Never Wonder What to Eat Again</h2>
                    <p className="mt-4 text-lg text-gray-600">Foodly’s smart AI learns your tastes. From your favorite breakfast spot to that new dessert place you've been wanting to try, we'll suggest meals we know you'll love.</p>
                    <ul className="mt-6 space-y-4 text-gray-700">
                        <li className="flex items-start"><span className="text-[#FF4B3E] font-bold mr-3">✓</span> Personalized "For You" row</li>
                        <li className="flex items-start"><span className="text-[#FF4B3E] font-bold mr-3">✓</span> Smart reordering of your past favorites</li>
                        <li className="flex items-start"><span className="text-[#FF4B3E] font-bold mr-3">✓</span> Discover new restaurants based on your order history</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Trending Cuisines */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center">Trending Cuisines</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {CUISINES.map(c => <CuisineCard key={c.name} cuisine={c} />)}
        </div>
      </section>

      {/* Download App Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FF4B3E] text-white rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-4xl font-extrabold">Get the Foodly App</h2>
          <p className="mt-4 max-w-2xl mx-auto">Order on the go, track your delivery in real-time, and get app-exclusive deals. Your next meal is just a tap away.</p>
          <div className="mt-8 flex justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row">
            <a href="#" className="transition-transform hover:scale-105"><AppStoreBadge className="h-12"/></a>
            <a href="#" className="transition-transform hover:scale-105"><GooglePlayBadge className="h-12"/></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
