import React from "react";
import Header from "./composant/Header";
import Outlet from "./component/Outlet";
import Footer from "./component/Footer";


function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
