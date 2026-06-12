import React from "react";
import Header from "./composant/Header";
import Outlet from "./component/Outlet";
import Footer from "./component/Footer";
import { FaCircleArrowUp } from "react-icons/fa6";

function App() {
  return (
    <div>
      <div className="posFix z-100 right0">
          <a href="#Home" className={window.Header ? "opacity0" : "opacity1"}><FaCircleArrowUp/></a>
      </div>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
