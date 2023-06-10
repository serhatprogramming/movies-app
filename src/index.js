import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const movies = [
  {
    id: 1,
    title: "The Godfather (1972)",
    watchList: true,
  },
  {
    id: 2,
    title: "The Shawshank Redemption (1994)",
    watchList: false,
  },
  {
    id: 3,
    title: "The Lord of the Rings: The Return of the King (2003)",
    watchList: true,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App movies={movies} />);
