import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import Booking from "./Pages/Booking";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
