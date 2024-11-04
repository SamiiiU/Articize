import React from "react";
import Home from "./Components/Home/Home.jsx";
import Nav from "./CommonComps/Nav/Nav.jsx";


function App() {
  return (
    <div className="w-full h-auto overflow-x-hidden font-inter box-border transition-all">
      <Nav/>
      <Home/>
    
    </div>
  );
}

export default App;
