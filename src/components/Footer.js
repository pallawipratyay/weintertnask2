import React, { useState } from "react";
import "./Footer.css";

function Footer({ onSignIn }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
    }
  };

  const footerLinks = [
    [
      { text: "FAQ", href: "#" },
      { text: "Investor Relations", href: "#" },
      { text: "Privacy", href: "#" },
      { text: "Speed Test", href: "#" }
    ],
    [
      { text: "Help Centre", href: "#" },
      { text: "Jobs", href: "#" },
      { text: "Cookie Preferences", href: "#" },
      { text: "Legal Notices", href: "#" }
    ],
    [
      { text: "Account", href: "#" },
      { text: "Ways to Watch", href: "#" },
      { text: "Corporate Information", href: "#" },
      { text: "Only on Netflix", href: "#" }
    ],
    [
      { text: "Media Centre", href: "#" },
      { text: "Terms of Use", href: "#" },
      { text: "Contact Us", href: "#" }
    ]
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-email-section">
          <p className="footer-email-text">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <form className="footer-email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer-email-input"
              required
            />
            <button type="submit" className="footer-get-started-btn">
              Get Started
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5L15 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>

        <p className="footer-questions">Questions? Call <a href="tel:000-800-919-1743">000-800-919-1743</a></p>

        <div className="footer-links">
          {footerLinks.map((column, columnIndex) => (
            <ul key={columnIndex} className="footer-column">
              {column.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="footer-language">
          <div className="footer-language-selector">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="white"/>
              <path d="M8 1C8 1 11 4 11 8C11 12 8 15 8 15M8 1C8 1 5 4 5 8C5 12 8 15 8 15M1 8H15" stroke="white" strokeWidth="1.5"/>
            </svg>
            <select className="footer-language-dropdown">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>
          <p className="footer-country">Netflix India</p>
        </div>

        <p className="footer-captcha">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="https://www.google.com/recaptcha/about/" target="_blank" rel="noopener noreferrer">Learn more</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

