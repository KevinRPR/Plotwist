import React from "react";
import { Navigation } from "./navigation";
import Foot from "./Footer";
import RandomBooks from "./RandomBooks";
import "../css/Books.css";

const BooksCat = () => {
  return (
    <div>
      <Navigation />
      <RandomBooks defaultQuery="subject:fiction" />
      <Foot />
    </div>
  );
};

export default BooksCat;
