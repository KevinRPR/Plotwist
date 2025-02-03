import React from 'react';
import '../css/subscribe.css';
const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h2 className="subscribe-title">
        Stay in touch! Subscribe to get information <br />
        and latest news about Plot Twist
      </h2>
      <form className="subscribe-form">
        <div className="subscribe-input-container">
          <i className="subscribe-icon">📧</i>
          <input
            type="email"
            className="subscribe-input"
            placeholder="Email Address"
          />
        </div>
        <button type="submit" className="subscribe-button">
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
