import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../css/Navbar.css";

const RandomBooks = ({ defaultQuery = "subject:fiction" }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;
  const API_KEY = "AIzaSyDtQxSwZ2t-hE8nu4gyi_PW-BX-97U3kII";

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const fetchBooks = useCallback(async (query = defaultQuery) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}&maxResults=40`
      );
      const items = shuffleArray(response.data.items || []);
      setBooks(items);
      setTotalPages(Math.ceil(items.length / itemsPerPage));
    } catch (error) {
      console.error("Error al obtener libros:", error);
    }
  }, [defaultQuery, itemsPerPage]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleSearch = useCallback((event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      fetchBooks(defaultQuery);
    } else {
      fetchBooks(value);
    }

    setCurrentPage(1);
  }, [fetchBooks, defaultQuery]);

  const changePage = (page) => setCurrentPage(page);

  const handleImageError = (event) => {
    if (event.target.src !== "/img/placeholder.png") {
      event.target.src = "/img/placeholder.png";
    }
  };

  const currentBooks = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="books-container">
      <div id="main-book-container">
        <input
          type="text"
          className="books-filter"
          placeholder="Search books by title or author..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="books-row">
        {currentBooks.map((book, index) => (
          <a
            href={`/book/${book.id}`}
            key={index}
            className="books-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            {book.volumeInfo?.imageLinks?.thumbnail ? (
              <img
                src={book.volumeInfo.imageLinks.thumbnail.replace("http://", "https://")}
                alt={book.volumeInfo.title || "No title available"}
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                }}
                onError={handleImageError}
              />
            ) : (
              <div className="no-image">No Image Available</div>
            )}
            <h5 className="books-title">{book.volumeInfo?.title || "Unknown Title"}</h5>
            <p className="books-author">
              {book.volumeInfo?.authors?.join(", ") || "Unknown Author"}
            </p>
          </a>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`pagination-button ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => changePage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RandomBooks;
