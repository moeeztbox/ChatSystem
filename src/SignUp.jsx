import React, { useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { auth } from "./FireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
        <p>
          Already Registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
