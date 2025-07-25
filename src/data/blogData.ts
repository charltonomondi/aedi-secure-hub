import React from 'react';

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  content: React.ReactElement;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Vulnerability haunts over a million Kenyan Businesses, more could be at risk!",
    author: "Afrensics Security Team", 
    date: "February 1, 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center",
    content: React.createElement('div', { className: "prose prose-lg max-w-none" }, 
      React.createElement('p', null, "Kenya's Business Registration Service (BRS) experienced a significant cyberattack on January 31, 2025, exposing over 1.1 million business records..."),
      React.createElement('h2', { className: "text-2xl font-bold mb-4" }, "What Was Compromised?"),
      React.createElement('p', null, "The breach included company ownership details, directorship information, and beneficial ownership records."),
      React.createElement('h2', { className: "text-2xl font-bold mb-4" }, "How to Protect Yourself"),
      React.createElement('p', null, "Monitor your accounts, enable 2FA, and consider professional cybersecurity services.")
    )
  },
  {
    id: "2",
    title: "The Rise of AI-Powered Cyber Attacks in 2025",
    author: "Dr. Sarah Kimani",
    date: "January 28, 2025", 
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&crop=center",
    content: React.createElement('div', { className: "prose prose-lg max-w-none" },
      React.createElement('p', null, "Artificial Intelligence is revolutionizing cybersecurity, but it's also empowering cybercriminals with sophisticated attack methods...")
    )
  },
  {
    id: "3", 
    title: "Essential Cybersecurity Practices for African SMEs",
    author: "Michael Ochieng",
    date: "January 25, 2025",
    image: "https://images.unsplash.com/photo-1558618047-d8a0c446b022?w=800&h=400&fit=crop&crop=center",
    content: React.createElement('div', { className: "prose prose-lg max-w-none" },
      React.createElement('p', null, "Small and medium enterprises across Africa face unique cybersecurity challenges. Here's how to protect your business...")
    )
  }
];