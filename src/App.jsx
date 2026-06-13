import React, { useEffect, useState } from "react";
import Header from "./composant/Header";
import Outlet from "./component/Outlet";
import Footer from "./component/Footer";
import { FaCircleArrowUp } from "react-icons/fa6";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="posFix z-100 right0">
        <a
          href="#Home"
          className={show ? "opacity1 black backButtom" : "opacity0"}
        >
          <FaCircleArrowUp />
        </a>
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
