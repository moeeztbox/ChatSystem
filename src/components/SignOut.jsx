import React from "react";
import { auth } from "../../firebase";
import { Button } from "@mui/material";
import "./style.css";

function SignOut() {
  return (
    <div className="signoutdiv">
      <Button
        className="signoutbutton p-3 text-sm rounded-md font-semibold mt-2  bg-black "
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default SignOut;
