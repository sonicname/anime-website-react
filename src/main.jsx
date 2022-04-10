import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MangaProvider } from "./context/mangaContext";

ReactDOM.render(
  <React.StrictMode>
    <MangaProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MangaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
