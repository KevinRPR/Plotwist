// src/components/Features.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/Banner-mid.css";

export const Features = () => {
  return (
    <div id="features" className="text-center">
      <div id="banner-mid">
        <div className="banner-content">
          <h1>What do you want to read?</h1>
          <div className="categories">
            <div className="category">
              <Link to="/books-cat">
                <img className="category-img" src="/img/categoria/Frame-18.svg" alt="Books" />
              </Link>
            </div>
            <Link to="/mangas-cat">
            <div className="category">
              <img className="category-img" src="/img/categoria/Frame-19.svg" alt="Manga" />
            </div>
            </Link>
            <Link to="/comic-cat">
            <div className="category">
              <img className="category-img" src="/img/categoria/Frame-20.svg" alt="Comics" />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
