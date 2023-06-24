import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Main from "./pages/main.js";
import Login from "./pages/login.js";
import FindId from "./pages/findId.js";
import FindPw from "./pages/findPw.js";
import SignUp from "./pages/signUp.js";
import ProductListPage from "./pages/productListPage";
import Product from "./pages/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find_id" element={<FindId />} />
          <Route path="/find_pw" element={<FindPw />} />
          <Route path="/join" element={<SignUp />} />
          <Route path="/women" element={<ProductListPage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
