import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductAll from "../pages/ProductAll";
import Login from "../pages/login";
import ProductDetail from "../pages/ProductDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="login" element={<Login />} />
        <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;