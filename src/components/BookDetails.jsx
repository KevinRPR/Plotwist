import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Navigation } from "./navigation";
import Foot from "./Footer";
import "../css/BookDetails.css"; // Importar el archivo CSS

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const API_KEY = "AIzaSyDtQxSwZ2t-hE8nu4gyi_PW-BX-97U3kII";
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Error al obtener los detalles del libro:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const getHighQualityImage = () => {
    const imageLinks = book?.volumeInfo?.imageLinks || {};
    return (
      imageLinks.extraLarge ||
      imageLinks.large ||
      imageLinks.medium ||
      imageLinks.small ||
      imageLinks.thumbnail ||
      imageLinks.smallThumbnail ||
      "/img/placeholder.png"
    ).replace("http://", "https://");
  };

  const handleToggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  if (loading) {
    return (
      <div className="book-details-page">
        <Navigation />
        <div className="book-details-loading">Cargando detalles del libro...</div>
        <Foot />
      </div>
    );
  }

  if (!book) {
    return (
      <div className="book-details-page">
        <Navigation />
        <div className="book-details-loading">No se encontraron detalles para este libro.</div>
        <Foot />
      </div>
    );
  }

  const cleanDescription = book?.volumeInfo?.description
    ? book.volumeInfo.description.replace(/<[^>]*>?/gm, "")
    : "Sin descripción";

  return (
    <div className="book-details-page">
      <Navigation />
      <div className="book-details-container">
        <div className="book-details-content">
          <div className="book-details-image-container">
            <img
              src={getHighQualityImage()}
              alt={`Portada de ${book.volumeInfo.title}`}
              className="book-details-image"
            />
            {book.volumeInfo.categories && (
  <div className="book-details-tags-container">
    
    <ul className="book-details-tags-list">
    <strong id="title-tags">Categories:</strong>
      {book.volumeInfo.categories.map((category, index) => (
        <li key={index} className="book-details-tag">{category}</li>
      ))}
    </ul>
  </div>
)}
          </div>
          <div className="book-details-main-container">
            <h1 className="book-details-title">{book.volumeInfo.title}</h1>
            <p className="book-details-author">
              <strong>Author:</strong> {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
            </p>
            <div
              className="book-details-description"
              style={{
                maxHeight: showFullDescription ? "1000px" : "410px",
                overflow: "hidden",
                opacity: showFullDescription ? 1 : 0.8,
              }}
            >
              {cleanDescription}
            </div>
            <button onClick={handleToggleDescription} className="book-details-toggle-button">
              {showFullDescription ? "View less" : "View more"}
            </button>
            <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer" className="book-details-link">
              START READING
            </a>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default BookDetails;
