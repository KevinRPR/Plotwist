import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "./SearchContext";


const BooksList = ({ books }) => {
  console.log("BooksList se está renderizando..."); // ✅ Verificar si se imprime en la consola
  console.log("Footer se debería renderizar después de esto...");

  const { setQuery } = useContext(SearchContext); 
  const navigate = useNavigate(); 

  const handleViewMore = (bookId) => {
    setQuery(""); 
    navigate(`/book/${bookId}`); 
  };

  return (
    <div>
      {books?.map((book) => (
        <div key={book.id} className="book-item">
          <img
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={`Portada de ${book.volumeInfo.title}`}
            className="book-image"
          />
          <div className="book-info">
            <h3>{book.volumeInfo.title}</h3>
            <p>
              Autor: {book.volumeInfo.authors?.join(", ") || "Autor desconocido"}
            </p>
            <p>
              {book.volumeInfo.description
                ? `${book.volumeInfo.description.substring(0, 200)}...`
                : "Descripción no disponible"}
            </p>
            <button
              onClick={() => handleViewMore(book.id)}
              className="result-button"
            >
              Ver más
            </button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default BooksList;
