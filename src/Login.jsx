import React, { useState } from "react";
import "./Style.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successfully");
      navigate("./Home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Login</h2>
        <label htmlFor="email">
          Email:
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </label>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/sign-up">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
