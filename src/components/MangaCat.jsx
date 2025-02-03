import React from "react";
import { Navigation } from "./navigation";
import Foot from "./Footer";
import RandomBooks from "./RandomBooks";
import "../css/Books.css";

const MangasCat = () => {
  return (
    <div>
      <Navigation />
      <RandomBooks defaultQuery="subject:manga" />
      <Foot />
    </div>
  );
};

export default MangasCat;
