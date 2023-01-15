import React from 'react';
import logo from '../../assets/logo/blackLogo.png';
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className='side'>
      <div className='logoSide'>
        <img src={logo} alt="logo" />
      </div>
     <div className='nav-maxi'>
     <NavLink className=""  to="/maxident/">
          <h1>INTRO</h1>
      </NavLink>
      <NavLink className=""  to="/maxident/creadit">
        <h1>CRADIT</h1>
      </NavLink>
      <NavLink className=""  to="/maxident/mv">
        <h1>MV</h1>
      </NavLink>
      <NavLink className=""  to="/maxident/lirik">
        <h1>LYRICS</h1>
      </NavLink>
      <NavLink className=""  to="/maxident/foto">
        <h1>PHOTO</h1>
      </NavLink>
     </div>
    </div>
  );
}

export default Sidebar;



