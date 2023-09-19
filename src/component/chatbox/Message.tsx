import { auth } from "../../firebase/config.firebase";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message } : any) => {
  const [user] : any = useAuthState(auth);
  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""} ml-2 mt-10`}>
      <img
        className="chat-bubble__left w-[50px] h-[50px] rounded-full"
        src="https://ecdn.game4v.com/g4v-content/uploads/2022/09/25083529/Gojo-2-game4v-1664069728-55.jpg"
      />
      <div className="chat-bubble__right flex relative">
        <p className="user-name">{message.name}</p>
        <p className="user-message pl-10 absolute left-[100px] top-[-25px]">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;