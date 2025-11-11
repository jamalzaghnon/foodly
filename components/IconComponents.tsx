
import React from 'react';

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

export const MotorcycleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle><path d="M14 17.5h-5.5l-2.5-4 3-2.5 2.5 2.5 1-2.5 2.5-1.5 1.5 2.5-1 3.5-2.5 2h-1zM9 11.5l1.5-1.5"></path><path d="M14.5 13.5H18l-2-4.5h-2.5"></path></svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);

export const AppStoreBadge: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="5" fill="black"/>
        <path d="M23.3333 13.9167C24.1667 12.0833 26.5 11.3333 27.8333 12.8333C28.8333 14 28.5 15.6667 29.5833 16.5833C30.6667 17.5 32.25 17.3333 33.3333 18.5C34.6667 19.9167 34.25 22.0833 33.25 23.3333C31.5 25.5 29.5 28.1667 27.8333 28.1667C26.1667 28.1667 26 26.25 24.3333 26.1667C22.6667 26.0833 22.5 28.1667 20.8333 28.1667C19.1667 28.1667 17.4167 25.5833 16.25 23.3333C14.1667 19.4167 13.1667 15.3333 15.5 12.4167C17.3333 10.0833 20.1667 9.5 22 9.58333C22.25 9.58333 24.1667 9.5 24.1667 11.5833" fill="white"/>
        <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Cairo" fontSize="10" fontWeight="bold" letterSpacing="0em"><tspan x="45" y="18.5333">Download on the</tspan></text>
        <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Cairo" fontSize="14" fontWeight="bold" letterSpacing="0em"><tspan x="45" y="32.5333">App Store</tspan></text>
    </svg>
);

export const GooglePlayBadge: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="40" rx="5" fill="black"/>
        <path d="M17.168 10.1519L27.0513 15.0936L17.168 20.0353V10.1519Z" fill="#FFD042"/>
        <path d="M17.168 20.0353L27.0513 15.0936L21.3664 17.9103L17.168 20.0353Z" fill="#FFB300"/>
        <path d="M15 28.5L17.168 20.0353L21.3664 17.9103L15 15V28.5Z" fill="#F44336"/>
        <path d="M17.168 10.1519L21.3664 12.2769L15 15L17.168 10.1519Z" fill="#4CAF50"/>
        <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Cairo" fontSize="10" fontWeight="bold" letterSpacing="0em"><tspan x="36" y="18.5333">GET IT ON</tspan></text>
        <text fill="white" xmlSpace="preserve" style={{whiteSpace: 'pre'}} fontFamily="Cairo" fontSize="14" fontWeight="bold" letterSpacing="0em"><tspan x="36" y="32.5333">Google Play</tspan></text>
    </svg>
);
