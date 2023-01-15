import React from 'react';
import logo from '../../assets/logo/whiteLogo.png';
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className='side ms-5'>
      <div className='logoSide'>
        <img src={logo} alt="logo" />
      </div>
     <div className='nav-maxi'>
     <NavLink className=""  to="/oddenary/">
          <h1>INTRO</h1>
      </NavLink>
      <NavLink className=""  to="/oddenary/creadit">
        <h1>CRADIT</h1>
      </NavLink>
      <NavLink className=""  to="/oddenary/mv">
        <h1>MV</h1>
      </NavLink>
      <NavLink className=""  to="/oddenary/lirik">
        <h1>LYRICS</h1>
      </NavLink>
      <NavLink className=""  to="/oddenary/foto">
        <h1>PHOTO</h1>
      </NavLink>
     </div>
    </div>
  );
}

export default Sidebar;



