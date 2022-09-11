import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="navLogo">Chat Room</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="profile pic" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
