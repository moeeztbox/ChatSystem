import React, { useState } from "react";
import "./style.css";
import { db, auth } from "../../firebase";
import { Input, Button } from "@mui/material";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser; // Get the current user's details

    // Add a new message to the "messages" collection in Firestore
    await addDoc(collection(db, "messages"), {
      text: msg,
      photoURL,
      uid,
      createdAt: serverTimestamp(), // Use server timestamp to order messages
    });

    setMsg(""); // Clear the input after sending
    scroll.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the bottom
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            className="inputfield"
            placeholder="Message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)} // Update the message state on change
          />
          <Button className="sendbutton" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
