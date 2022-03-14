import "./App.css";
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Upload from "./components/Upload";
import SignUpState from "./components/context/SignUpState";
import FotoState from "./components/context/FotoState";

function App() {
  // const token = Cookies.get("auth_token")
  return (
    
      <HashRouter>
        <SignUpState>
      <FotoState>
        {" "}
        <div className="App">
          <Navbar />
          <Routes>
            {<Route path="/" element={<Home />} />}
            {<Route path="/signup" element={<SignUp />} />}
            {<Route path="/upload" element={<Upload />} />}
          </Routes>
          <Footer />
        </div>
        </FotoState>
    </SignUpState>
      </HashRouter>
     
  );
}

export default App;
