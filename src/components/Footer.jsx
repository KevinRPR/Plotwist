import React from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Foot = () => {

  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src="/img/logo-2.svg" alt="Logo" />
        <p className="footer-description">
          Book your trip in minutes, get full control for much longer.
        </p>
      </div>

      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/our-story">Our Story</a></li>
          <li><a href="/merch">Merch</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+19545553785">(954) 555-3785</a></li>
          <li><a href="mailto:support@plottwist.com">support@plottwist.com</a></li>
          <li><a href="/address">Dirección</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>More</h4>
        <ul>
          <li><a href="/help">Help/FAQ</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
