// import { useState } from "react";
import Respstyle from "./Respstyle";

function Navbar() {
  return (
    <nav className="displayF justifyCSB alignIC posFix z-100 w100prc">
      <div className="w25prc">
        <h1>Logo</h1>
      </div>
      <div className="w70prc">
        <div className="w100prc">
          <Respstyle></Respstyle>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
