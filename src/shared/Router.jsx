import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductAll from "../pages/ProductAll";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import PrivateRoute from "../route/PrivateRoute";

const Router = () => {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(()=> {
    console.log('aaaa', authenticate)
  }, [authenticate])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;