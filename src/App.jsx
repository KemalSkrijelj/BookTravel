// import { useState } from "react";
import "./App.css";
// import MySentence from "./components/MySentence/MySentence";
// import Greeting from "./components/Greeting/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import Footer  from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Hotels from "./pages/Hotels/Hotels";
import Hotel from "./pages/Hotel/Hotel";

function App() {
  return (
    <div className="app">
      <Navbar />
        <div className="hotels">
          <Routes>
            <Route path="/" />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<Hotel />} />
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
