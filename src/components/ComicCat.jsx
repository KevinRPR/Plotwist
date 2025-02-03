import React from "react";
import { Navigation } from "./navigation";
import Foot from "./Footer";
import RandomBooks from "./RandomBooks";
import "../css/Books.css";

const ComicCat = () => {
  return (
    <div>
      <Navigation />
      <RandomBooks defaultQuery="subject:comic" />
      <Foot />
    </div>
  );
};

export default ComicCat;
