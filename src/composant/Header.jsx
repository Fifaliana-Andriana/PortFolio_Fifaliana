// import React from "react";
import Navbar from "../component/Navbar";

function Header() {
  return (
    <div className="posRel z-0">
      <Navbar></Navbar>
      <div id="Home" className="header">
        <img src="/Profil.jpg" alt="Fifaliana" className="Profil" />
        <h1 className="h15cm fontS">
          ANDRIANJAFIMALALA Feno Fifaliana
        </h1>
        <p>Développeur Web Full Stack — PHP / Laravel / MySQL</p>
        <a href="#Contact" class="btn">
          Voir mes contact
        </a>
      </div>
    </div>
  );
}

export default Header;
