import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/home/home";
import { About } from "./screens/about/about";
import { Reservation } from "./screens/reservation/reservation";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
