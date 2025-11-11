
import React, { useState } from 'react';
import { ChevronDownIcon } from '../components/IconComponents';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="pb-5 pr-4 text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

const faqData = [
    { question: 'How do I place an order?', answer: 'Simply enter your location, browse restaurants, add items to your cart, and proceed to checkout. It\'s that easy!' },
    { question: 'What are your delivery hours?', answer: 'Our delivery hours vary by restaurant, but most are available from 11:00 AM to 12:00 AM. Check the restaurant\'s page for specific hours.' },
    { question: 'How can I track my order?', answer: 'Once your order is confirmed, you can track its progress in real-time through the "My Orders" section in our app.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit/debit cards, Apple Pay, Google Pay, and Cash on Delivery at select restaurants.' },
    { question: 'How do I report an issue with my order?', answer: 'If you have any issues, you can contact our live chat support in the app or call our support hotline. We are always here to help.' },
];

const SupportPage: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold">How can we help?</h1>
          <p className="mt-2 text-lg text-gray-600">Find answers to your questions below.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div>
                    {faqData.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} />)}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Chat with us</h2>
                <div className="bg-white rounded-2xl shadow-lg p-4 h-96 flex flex-col">
                    <div className="bg-[#FF4B3E] text-white p-3 rounded-t-lg">
                        <h3 className="font-bold">Foodly AI Assistant</h3>
                    </div>
                    <div className="flex-grow bg-gray-50 p-4 space-y-4 overflow-y-auto">
                        <div className="flex">
                            <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
                                <p>Welcome! How can I assist you today?</p>
                            </div>
                        </div>
                         <div className="flex justify-end">
                            <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                                <p>I have a question about my last order.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 border-t">
                        <input type="text" placeholder="Type your message..." className="w-full px-3 py-2 bg-gray-100 rounded-full focus:outline-none" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
