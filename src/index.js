import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/mainComponents/notFound";
import NewBatchComponent from "./components/brewingComponents/newBatchComponent";
import CurrentlyFermentingBrews from "./components/bottlingComponents/currentlyFermentingBrews";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>    
        <Route path="/" element={<App />} />
        <Route path="bottle" element={<App />} />
        <Route path="review" element={<App />} />
        <Route path="brew" element={<NewBatchComponent />} />
        <Route path="brews" element={<CurrentlyFermentingBrews />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);