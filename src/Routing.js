import React from "react";
import {  Route, Routes } from "react-router-dom";

import Contact from "./pages/Contact";
const Routing = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routing;
