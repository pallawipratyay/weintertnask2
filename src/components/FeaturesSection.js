import React from "react";
import "./FeaturesSection.css";

function FeaturesSection() {
  const features = [
    {
      title: "Enjoy on your TV",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: "tv"
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favourites easily and always have something to watch.",
      icon: "download"
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: "device"
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: "kids"
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">More reasons to join</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className={`feature-icon feature-icon-${feature.icon}`}>
                {feature.icon === "tv" && (
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id={`gradient-tv-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E50914"/>
                        <stop offset="100%" stopColor="#F5C842"/>
                      </linearGradient>
                    </defs>
                    <rect x="10" y="20" width="80" height="50" rx="5" fill={`url(#gradient-tv-${index})`}/>
                    <rect x="15" y="25" width="70" height="40" fill="#fff" opacity="0.1"/>
                  </svg>
                )}
                {feature.icon === "download" && (
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="35" fill="#E50914"/>
                    <path d="M50 30V60M50 60L40 50M50 60L60 50" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {feature.icon === "device" && (
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="25" width="60" height="45" rx="5" fill="#E50914"/>
                    <circle cx="50" cy="80" r="8" fill="#E50914"/>
                    <path d="M30 35L70 35M30 45L55 45" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
                {feature.icon === "kids" && (
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="25" width="50" height="50" rx="5" fill="#E50914" opacity="0.8"/>
                    <rect x="35" y="35" width="30" height="30" rx="3" fill="#F5C842"/>
                    <circle cx="45" cy="48" r="3" fill="#000"/>
                    <circle cx="55" cy="48" r="3" fill="#000"/>
                    <path d="M45 58Q50 62 55 58" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

