// import { useState } from "react";
import "./App.css";
// import MySentence from "./components/MySentence/MySentence";
// import Greeting from "./components/Greeting/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import Footer  from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import HotelsList from "./pages/Hotels/Hotels";
import Hotel from "./pages/Hotel/Hotel";
import AboutUs from "./pages/AboutUs/About";
import Teams from "./pages/Teams/Teams";
import { Home } from "./pages/Home/Home";


function App() {
  return (
    <div className="app">
      <Navbar />
          <Routes>
            <Route path="/"element={<Home />} />
            <Route path="/hotels-list" element={<HotelsList />} />
            <Route path="/hotels/:id" element={<Hotel />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path='/teams' element={<Teams />}/>
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
