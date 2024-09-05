import React from "react";
import { Button } from "@mui/material";
import { auth } from "../../firebase";
import "./style.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignIn() {
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider(); // Create a new GoogleAuthProvider instance
    signInWithPopup(auth, provider) // Use the signInWithPopup function with auth and provider
      .then((result) => {
        console.log("User signed in successfully:", result.user);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  }

  return (
    <div className="signindiv flex items-center justify-center h-screen bg-slate-400 bg-cover bg-center">
      <Button
        className="signinbutton p-8 h-20 text-xl font-semibold rounded-none bg-black text-white"
        onClick={signInWithGoogle}
      >
        <img
          className="mr-4 mt-0.5"
          src="../src/images/googleicon.png"
          alt=""
        />
        Sign In With Google
      </Button>
    </div>
  );
}

export default SignIn;
