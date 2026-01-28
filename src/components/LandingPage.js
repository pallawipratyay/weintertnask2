import React, { useState } from "react";
import "./LandingPage.css";
import TrendingNow from "./TrendingNow";
import FeaturesSection from "./FeaturesSection";
import FAQ from "./FAQ";
import Footer from "./Footer";

const translations = {
  English: {
    signIn: "Sign In",
    title: "Unlimited movies, TV shows and more",
    subtitle: "Starts at ₹149. Cancel anytime.",
    description: "Ready to watch? Enter your email to create or restart your membership.",
    emailPlaceholder: "Email address",
    getStarted: "Get Started"
  },
  हिन्दी: {
    signIn: "साइन इन करें",
    title: "असीमित फ़िल्में, टीवी शो और बहुत कुछ",
    subtitle: "₹149 से शुरू करें। कभी भी रद्द करें।",
    description: "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः शुरू करने के लिए अपना ईमेल दर्ज करें।",
    emailPlaceholder: "ईमेल पता",
    getStarted: "शुरू करें"
  }
};

function LandingPage({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("English");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would handle signup
      console.log("Email submitted:", email);
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    console.log("Language changed to:", e.target.value);
  };

  const t = translations[language];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        
        {/* Header */}
        <header className="hero-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="netflix-logo"
          />
          <div className="header-right">
            <div className="language-selector">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="white"/>
                <path d="M8 1C8 1 11 4 11 8C11 12 8 15 8 15M8 1C8 1 5 4 5 8C5 12 8 15 8 15M1 8H15" stroke="white" strokeWidth="1.5"/>
              </svg>
              <select 
                className="language-dropdown"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="English">English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
            </div>
            <button className="sign-in-btn" onClick={onSignIn}>
              {t.signIn}
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <p className="hero-description">
            {t.description}
          </p>
          <form className="hero-email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="hero-email-input"
              required
            />
            <button type="submit" className="hero-get-started-btn">
              {t.getStarted}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5L15 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* Trending Now Section */}
      <TrendingNow />

      {/* Features Section */}
      <FeaturesSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer onSignIn={onSignIn} />
    </div>
  );
}

export default LandingPage;

