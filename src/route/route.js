import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import App from "../pages";
import Home from "../pages/home";
import Maxident from "../pages/maxident";
import Oddenery from "../pages/oddenery";

function Rute() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home"  element={<Home />} />
      <Route path="/oddenary//*"  element={<Oddenery />} />
      <Route path="/maxident//*"  element={<Maxident />} />
     </Routes>
  );
}

export default Rute;

