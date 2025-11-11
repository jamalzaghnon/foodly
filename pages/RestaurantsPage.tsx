
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANTS } from '../constants';
import { Restaurant } from '../types';
import { StarIcon, ClockIcon, ChevronDownIcon } from '../components/IconComponents';

const RestaurantCard: React.FC<{ restaurant: Restaurant }> = ({ restaurant }) => (
  <Link to={`/restaurant/${restaurant.id}`} className="block">
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
        <p className="text-gray-500">{restaurant.cuisine}</p>
        <div className="flex items-center justify-between mt-3 text-sm text-gray-600 mt-auto pt-4">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="font-bold">{restaurant.rating}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 text-gray-400 mr-1" />
            <span>{restaurant.deliveryTime} min</span>
          </div>
          <span className="font-bold text-gray-800">{restaurant.priceRange}</span>
        </div>
      </div>
    </div>
  </Link>
);

const FilterButton: React.FC<{ label: string }> = ({ label }) => (
  <button className="flex items-center justify-between w-full md:w-auto bg-white border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:border-gray-400 transition">
    <span>{label}</span>
    <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-500" />
  </button>
);


const RestaurantsPage: React.FC = () => {
  const [restaurants] = useState<Restaurant[]>(RESTAURANTS);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold">Find Your Next Meal</h1>
        <p className="mt-2 text-lg text-gray-600">Discover great restaurants near you.</p>
      </div>
      
      {/* Filters */}
      <div className="mb-8 p-4 bg-gray-100 rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <FilterButton label="Cuisine" />
          <FilterButton label="Price" />
          <FilterButton label="Rating" />
          <FilterButton label="Delivery Time" />
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsPage;
