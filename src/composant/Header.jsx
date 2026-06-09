// import React from "react";
import Navbar from "../component/Navbar";

function Header() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="header">
        <img
          src="/Profil.jpg"
          alt="Fifaliana"
          className="Profil"
        />
        <h1>My name is Fifaliana.</h1>
      </div>
    </div>
  );
}

export default Header;
