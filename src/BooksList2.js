import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('react');

  
  const fetchBooks = async () => {
    try {
      const API_KEY = 'AIzaSyDtQxSwZ2t-hE8nu4gyi_PW-BX-97U3kII'; 
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
      );
      setBooks(response.data.items || []); 
    } catch (error) {
      console.error('Error al obtener los libros:', error);
    }
  };

  
  useEffect(() => {
    fetchBooks();
  }, [query]);

  
  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks(); 
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Libros</h1>
      <form onSubmit={handleSearch} className="mb-4 flex space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar libros"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Buscar
        </button>
      </form>
      <div>
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
              <h2 className="text-xl font-semibold">{book.volumeInfo.title}</h2>
              <p className="text-gray-600">
                Autor(es): {book.volumeInfo.authors?.join(', ') || 'Desconocido'}
              </p>
              <p>{book.volumeInfo.description || 'Sin descripción'}</p>
              <img
                src={
                  book.volumeInfo.imageLinks?.thumbnail ||
                  'https://via.placeholder.com/128x195.png?text=No+Image'
                }
                alt={book.volumeInfo.title}
                className="mt-2"
              />
            </div>
          ))
        ) : (
          <p>No se encontraron libros</p>
        )}
      </div>
    </div>
  );
};

export default BooksList;
