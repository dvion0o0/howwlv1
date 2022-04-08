import React from "react"
import {magicMouse} from "magicmouse.js"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


const options = {
  cursorOuter: 'circle-basic',
  hoverEffect: 'circle-move',
  hoverItemMove: true,
  defaultCursor: false,
  outerWidth: 30,
  outerHeight: 30,
}
magicMouse(options)

function App() {
  return (
    <div className="wrapper">
      <Home />
    </div>
  );
}

export default App;
