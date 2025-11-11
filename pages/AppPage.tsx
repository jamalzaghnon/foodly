import React from 'react';
import { AppStoreBadge, GooglePlayBadge } from '../components/IconComponents';

// Fix: Replaced JSX.Element with React.ReactNode to resolve type error.
const Feature: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-red-100 text-[#FF4B3E] flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

const AppPage: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">The Ultimate Food Experience, in Your Pocket.</h1>
            <p className="mt-4 text-xl text-gray-600">Download the Foodly app for the fastest, easiest way to order from your favorite restaurants.</p>
            <div className="mt-8 flex justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row">
              <a href="#" className="transition-transform hover:scale-105"><AppStoreBadge className="h-12"/></a>
              <a href="#" className="transition-transform hover:scale-105"><GooglePlayBadge className="h-12"/></a>
            </div>
             <div className="mt-8 flex justify-center md:justify-start">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com" alt="QR Code" className="w-32 h-32 rounded-lg shadow-md" />
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/seed/app-mockup/500/600" alt="Foodly App Mockup" className="mx-auto max-w-xs md:max-w-sm rounded-[3rem] shadow-2xl" />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
            <h2 className="text-3xl font-extrabold text-center">Everything you need, and more.</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-10">
                <Feature 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                    title="Real-Time Tracking"
                    description="Watch your order make its way to you with our live map tracking feature."
                />
                 <Feature 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                    title="AI Suggestions"
                    description="Get personalized meal recommendations based on your tastes and order history."
                />
                 <Feature 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
                    title="Live Chat Support"
                    description="Have a question? Our local support team is available to help you in real-time."
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;