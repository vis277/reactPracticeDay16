import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageOne></PageOne>}></Route>
        <Route path="/:id" element={<PageTwo></PageTwo>}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
