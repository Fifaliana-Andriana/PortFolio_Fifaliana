import React from "react";
import Header from "./composant/Header";
import Outlet from "./component/Outlet";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <div className="bgBlack posFix z-100 right0">
        <button>
          <a href="#Home">retour</a>
        </button>
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
