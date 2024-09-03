import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
