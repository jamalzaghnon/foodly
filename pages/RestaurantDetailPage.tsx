
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { RESTAURANTS, MENU, REVIEWS } from '../constants';
import { MenuItem, Review } from '../types';
import { StarIcon, ClockIcon } from '../components/IconComponents';

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
    <div className="flex items-start space-x-4 p-4 border-b">
        <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
        <div className="flex-grow">
            <h4 className="font-bold text-lg">{item.name}</h4>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            <p className="font-bold text-[#FF4B3E] mt-2">{item.price} SAR</p>
        </div>
        <button className="self-center bg-[#FF4B3E] text-white font-bold w-10 h-10 rounded-full text-2xl hover:bg-red-600 transition">+</button>
    </div>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="p-4 border-b">
        <div className="flex items-center justify-between">
            <h4 className="font-bold">{review.author}</h4>
            <span className="text-sm text-gray-500">{review.date}</span>
        </div>
        <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
        </div>
        <p className="mt-2 text-gray-700">{review.comment}</p>
    </div>
);

const RestaurantDetailPage: React.FC = () => {
  const { id } = useParams();
  const restaurant = RESTAURANTS.find(r => r.id === id);

  if (!restaurant) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Restaurant not found</h1>
        <Link to="/restaurants" className="text-[#FF4B3E] hover:underline mt-4 inline-block">Back to restaurants</Link>
      </div>
    );
  }

  return (
    <div>
        {/* Header Image */}
        <div className="h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${restaurant.imageUrl})` }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg -mt-24 relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold">{restaurant.name}</h1>
                        <p className="text-gray-600 text-lg mt-1">{restaurant.cuisine}</p>
                    </div>
                    <div className="flex items-center space-x-6 mt-4 md:mt-0 text-lg">
                        <div className="flex items-center">
                            <StarIcon className="w-6 h-6 text-yellow-400 mr-2" />
                            <span className="font-bold">{restaurant.rating}</span>
                        </div>
                        <div className="flex items-center">
                            <ClockIcon className="w-6 h-6 text-gray-500 mr-2" />
                            <span className="font-semibold">{restaurant.deliveryTime} min ETA</span>
                        </div>
                    </div>
                </div>
                <button className="mt-6 w-full md:w-auto bg-[#FF4B3E] text-white py-3 px-6 rounded-full font-bold hover:bg-red-600 transition-colors duration-300">
                    Reorder your last meal
                </button>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
                {/* Menu Section */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Menu</h2>
                    {MENU.map(category => (
                        <div key={category.title} className="mb-8">
                            <h3 className="text-2xl font-bold text-[#FF4B3E] border-b-2 border-[#FF4B3E] pb-2 mb-4">{category.title}</h3>
                            <div className="space-y-4">
                                {category.items.map(item => <MenuItemCard key={item.id} item={item} />)}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Reviews Section */}
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
                    <div className="space-y-4">
                        {REVIEWS.map(review => <ReviewCard key={review.id} review={review} />)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RestaurantDetailPage;
