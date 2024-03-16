import React from "react";
import Routing from "./Routing";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" ">
      <div id="home">
<Home/>
      </div>
      <Routing />
    </div>
  );
}

export default App;