import React, { useContext, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { SearchContext } from "./SearchContext";
import BooksList from "./BooksList";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const { query, setQuery, filteredBooks, setFilteredBooks } = useContext(SearchContext);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchBooks = useCallback(async () => {
    if (!query.trim()) {
      setFilteredBooks([]);
      return;
    }

    try {
      const API_KEY = "AIzaSyDtQxSwZ2t-hE8nu4gyi_PW-BX-97U3kII";
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
      );
      setFilteredBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }, [query, setFilteredBooks]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  useEffect(() => {
    const scrollThreshold = 5;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY < lastScrollY - scrollThreshold || currentScrollY <= scrollThreshold);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isNavbarVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="custom-navbar"
    >
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Link to="/">
              <img src="/img/logo.svg" alt="Logo" />
            </Link>
          </div>
          <button
            className="hamburger-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#banner-mid" onClick={(e) => handleScrollToSection(e, "banner-mid")}>
              Genres
            </a>
          </li>
          <li>
            <a href="#authors" onClick={(e) => handleScrollToSection(e, "authors")}>
              Authors
            </a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>

        <div className="navbar-search">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What would you like to read?"
          />
          <button aria-label="Search">
            <img src="/img/search.svg" alt="Search" width="20" height="20" />
          </button>
          {query.trim() && filteredBooks.length > 0 && (
            <div className="search-results">
              <BooksList books={filteredBooks} />
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};
