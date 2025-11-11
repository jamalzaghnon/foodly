
import React, { useState } from 'react';

const JoinUsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'restaurants' | 'drivers'>('restaurants');

    const inputClasses = "w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:border-[#FF4B3E] transition";

    const renderRestaurantForm = () => (
        <div className="text-center">
            <h2 className="text-3xl font-extrabold">Partner with Foodly</h2>
            <p className="mt-2 text-lg text-gray-600">Grow your business and reach new customers in your city.</p>
            <form className="mt-8 max-w-lg mx-auto space-y-6">
                <input type="text" placeholder="Restaurant Name" className={inputClasses} />
                <input type="text" placeholder="Your Full Name" className={inputClasses} />
                <input type="email" placeholder="Email Address" className={inputClasses} />
                <input type="tel" placeholder="Phone Number" className={inputClasses} />
                <button type="submit" className="w-full bg-[#FF4B3E] text-white py-3 px-6 rounded-full font-bold hover:bg-red-600 transition-colors duration-300 text-lg">
                    Submit Application
                </button>
            </form>
        </div>
    );

    const renderDriverForm = () => (
        <div className="text-center">
            <h2 className="text-3xl font-extrabold">Ride with Foodly</h2>
            <p className="mt-2 text-lg text-gray-600">Earn money on your own schedule. Be your own boss.</p>
            <form className="mt-8 max-w-lg mx-auto space-y-6">
                <input type="text" placeholder="Your Full Name" className={inputClasses} />
                <input type="email" placeholder="Email Address" className={inputClasses} />
                <input type="tel" placeholder="Phone Number" className={inputClasses} />
                 <select className={inputClasses}>
                    <option>Select your city</option>
                    <option>Riyadh</option>
                    <option>Jeddah</option>
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                </select>
                <button type="submit" className="w-full bg-[#FF4B3E] text-white py-3 px-6 rounded-full font-bold hover:bg-red-600 transition-colors duration-300 text-lg">
                    Start Earning
                </button>
            </form>
        </div>
    );

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-center border-b-2 border-gray-200 mb-12">
                <button 
                    onClick={() => setActiveTab('restaurants')} 
                    className={`px-8 py-3 text-lg font-bold transition-colors duration-300 ${activeTab === 'restaurants' ? 'text-[#FF4B3E] border-b-2 border-[#FF4B3E]' : 'text-gray-500'}`}
                >
                    For Restaurants
                </button>
                <button 
                    onClick={() => setActiveTab('drivers')} 
                    className={`px-8 py-3 text-lg font-bold transition-colors duration-300 ${activeTab === 'drivers' ? 'text-[#FF4B3E] border-b-2 border-[#FF4B3E]' : 'text-gray-500'}`}
                >
                    For Drivers
                </button>
            </div>

            <div>
                {activeTab === 'restaurants' ? renderRestaurantForm() : renderDriverForm()}
            </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
