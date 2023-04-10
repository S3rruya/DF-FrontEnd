import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from './style/global';
import { ToastContainer } from "react-toastify";
import { RegisterPage } from './pages/register/RegisterPage';
import { LoginPage } from './pages/login/LoginPage';
import { DashboardPage } from './pages/dashboard/DashboardPage';


function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <Routes>
        <Route path="/">
          <Route index element={<DashboardPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
