
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import AboutPage from './pages/AboutPage';
import AppPage from './pages/AppPage';
import JoinUsPage from './pages/JoinUsPage';
import SupportPage from './pages/SupportPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-gray-50 text-gray-800">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="/join-us" element={<JoinUsPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </main>
        <Footer />
        <a href="#/restaurants" className="fixed bottom-6 right-6 bg-[#FF4B3E] text-white py-3 px-5 rounded-full shadow-lg hover:bg-red-600 transition-transform duration-300 hover:scale-105 z-40 font-bold">
          Order Now
        </a>
      </div>
    </HashRouter>
  );
};

export default App;
