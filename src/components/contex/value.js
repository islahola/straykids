import { NavLink } from "react-router-dom";
import {useState} from 'react';
import { AppContext } from "../contex/app-contex";
import Intro from "../home/intro";

function Name() {
  const [name, setname] = useState("olla");
  const handleName = (e) =>{
    setname(e.target.value)
    console.log(name)
  }
  const appContextValue = {
    user : "olla"
  }
  return (
      <AppContext.Provider value={appContextValue}>
        
      </AppContext.Provider>
   );
}

export default Name;