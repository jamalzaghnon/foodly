
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = "text-gray-600 hover:text-[#FF4B3E] transition duration-300 font-semibold";
  const activeNavLinkClasses = "text-[#FF4B3E]";

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses;

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-extrabold text-[#FF4B3E]">
              Foodly
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>
            <NavLink to="/restaurants" className={getNavLinkClass}>Restaurants</NavLink>
            <NavLink to="/about" className={getNavLinkClass}>About Us</NavLink>
            <NavLink to="/app" className={getNavLinkClass}>Our App</NavLink>
            <NavLink to="/join-us" className={getNavLinkClass}>Join Us</NavLink>
            <NavLink to="/support" className={getNavLinkClass}>Support</NavLink>
          </nav>
          <div className="hidden md:block">
            <Link to="/join-us" className="bg-transparent text-[#FF4B3E] border-2 border-[#FF4B3E] py-2 px-6 rounded-full font-bold hover:bg-[#FF4B3E] hover:text-white transition duration-300">
              Sign Up
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-[#FF4B3E] focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <NavLink to="/" className={getNavLinkClass} onClick={() => setIsOpen(false)} end>Home</NavLink>
            <NavLink to="/restaurants" className={getNavLinkClass} onClick={() => setIsOpen(false)}>Restaurants</NavLink>
            <NavLink to="/about" className={getNavLinkClass} onClick={() => setIsOpen(false)}>About Us</NavLink>
            <NavLink to="/app" className={getNavLinkClass} onClick={() => setIsOpen(false)}>Our App</NavLink>
            <NavLink to="/join-us" className={getNavLinkClass} onClick={() => setIsOpen(false)}>Join Us</NavLink>
            <NavLink to="/support" className={getNavLinkClass} onClick={() => setIsOpen(false)}>Support</NavLink>
            <Link to="/join-us" onClick={() => setIsOpen(false)} className="mt-4 w-full text-center bg-[#FF4B3E] text-white py-2 px-6 rounded-full font-bold hover:bg-red-600 transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
