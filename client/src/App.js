import "./App.css";
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Fotos from "./components/Fotos";
import SignUpState from "./components/context/SignUpState";

function App() {
  return (
    <SignUpState>
      <HashRouter>
        {" "}
        <div className="App">
          <Navbar />
          <Routes>
            {<Route path="/" element={<Home />} />}
            {<Route path="/signup" element={<SignUp />} />}
            {<Route path="/fotos" element={<Fotos />} />}
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </SignUpState>
  );
}

export default App;
