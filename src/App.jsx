// import { useState } from "react";
import "./App.css";
// import MySentence from "./components/MySentence/MySentence";
// import Greeting from "./components/Greeting/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";

import HotelsList from "./pages/Hotels/Hotels";
import Hotel from "./pages/Hotel/Hotel";
import AboutUs from "./pages/AboutUs/About";
import Teams from "./pages/Teams/Teams";
import FavList from "./pages/YourList/YourList";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Quotes from "./pages/Quotes/Quotes";
import Auth from "./pages/Auth/Auth";
import NotFound from "./pages/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import { Home } from "./pages/Home/Home";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { setLoggedInUser } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const localLoggedInUser = localStorage.getItem("loggedInUser");
    if (localLoggedInUser) {
      setLoggedInUser(JSON.parse(localLoggedInUser));
    } else {
      setLoggedInUser(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const localLoggedInUser = localStorage.getItem("loggedInUser");
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/auth"
          element={!localLoggedInUser ? <Auth /> : <Home />}
        />
        {/* <Route path="/auth" element={!localLoggedInUser ? (<Route path="/auth" element={<Auth />} />) : (navigate("/"))} /> */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hotels-list"
          element={
            <ProtectedRoute>
              <HotelsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hotels/:id"
          element={
            <ProtectedRoute>
              <Hotel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/yourList"
          element={
            <ProtectedRoute>
              <FavList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about-us"
          element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signUp"
          element={
            <ProtectedRoute>
              <SignUp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quotes"
          element={
            <ProtectedRoute>
              <Quotes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teams"
          element={
            <ProtectedRoute>
              <Teams />
            </ProtectedRoute>
          }
        />
                <Route
          path="*"
          element={
            <ProtectedRoute>
              <NotFound />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
