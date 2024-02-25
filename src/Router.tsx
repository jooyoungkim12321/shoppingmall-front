import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* 디폴트 라우팅 */}
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default Router;
