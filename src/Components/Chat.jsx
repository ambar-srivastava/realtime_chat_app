import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../Context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <i className="ri-camera-fill"></i>
          <i className="ri-user-6-fill"></i>
          <i className="ri-more-fill"></i>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
