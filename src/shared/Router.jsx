import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductAll from "../pages/ProductAll";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";

const Router = () => {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="login" element={<Login />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;