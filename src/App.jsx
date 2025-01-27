import React, { useState } from "react";
import Footer from "./Components/Footer/Footer"
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import PageRouting from "./Components/PageRouting";
import Private from "./Components/Private";
import SellerRouting from "./Components/SellerRouting";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={ <PageRouting />} />
        <Route path="/seller-page" element={ <LandingPage />} />
        <Route path="/seller-dashboard/*" element={ <Private><SellerRouting /></Private>} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
