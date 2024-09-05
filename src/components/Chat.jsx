import React, { useEffect, useRef, useState } from "react";
import SignOut from "./SignOut";
import SendMessage from "./SendMessage";
import { db, auth } from "../../firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";

function Chat() {
  const scroll = useRef(); // Ref to keep track of the end of messages
  const [messages, setMessages] = useState([]); // State to store messages

  useEffect(() => {
    const q = query(
      collection(db, "messages"), // Reference to the "messages" collection
      orderBy("createdAt"), // Order messages by "createdAt" field
      limit(50) // Limit to 50 messages
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))); // Set messages state with retrieved data
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []);

  useEffect(() => {
    // Scroll to the bottom when messages are updated
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="backgroundimage">
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div
            key={id} // Correct placement of the key prop
            className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}
          >
            <img src={photoURL} alt="User Avatar" />
            <p>{text}</p>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div> {/* Ref to automatically scroll to the bottom */}
    </div>
  );
}

export default Chat;
