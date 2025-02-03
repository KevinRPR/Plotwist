import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import Info from "./components/info";
import Subscribe from "./components/subscribe";
import BooksCat from "./components/BooksCat";
import Foot from "./components/Footer";
import BookDetails from "./components/BookDetails";
import { SearchProvider } from "./components/SearchContext";
import JsonData from "./data/data.json";
import axios from "axios";
import { TextCarousel } from "./components/TextCarousel";
import Layout from "./components/layout";
import MangasCat from "./components/MangaCat";
import ComicCat from "./components/ComicCat";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import BooksList from "./components/BooksList"; 
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setLandingPageData(JsonData);

    const fetchBooks = async () => {
      try {
        const query = "React";
        const API_KEY = "AIzaSyDtQxSwZ2t-hE8nu4gyi_PW-BX-97U3kII";
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
        );
        setBooks(response.data.items || []);
      } catch (error) {
        console.error("Error al obtener libros desde la API:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <SearchProvider>
      <Router basename="/"> {/* 🔹 Se asegura que React Router no agregue /book a los archivos estáticos */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation books={books} />
                <Header data={landingPageData.Header} />
                <TextCarousel />
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Layout />
                <Info />
                <Subscribe />
                <Foot />
              </>
            }
          />
          <Route path="/books" element={<BooksList books={books} />} />
          <Route path="/books-cat" element={<BooksCat />} />
          <Route path="/mangas-cat" element={<MangasCat />} />
          <Route path="/comic-cat" element={<ComicCat />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default App;
