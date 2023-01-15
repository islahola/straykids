import React,{useState} from 'react';
import Intro from '../components/maxident/intro';
import Sidebar from '../components/maxident/sidebar';
import {
  Route,
  Routes,
} from "react-router-dom";
import Mv from '../components/maxident/mv';
import Creadit from '../components/maxident/creadit';
import Poto from '../components/maxident/poto';
import Lirik from '../components/maxident/lirik';
import Test from '../components/maxident/test';
import wave from '../assets/vector/wave.png'
import { motion as m } from 'framer-motion'
import Toggle from '../components/sidebar/toggle';

const Maxident = () => {
  const [open, setOpen] = useState(true);
  const [openMobile, setOpenMoble] = useState(false);
  const handleOpen = () =>{
    setOpen((prevState) => !prevState)
    setOpenMoble((prevState) => !prevState)
    console.log(open)
  }
  return (
    <m.div 
      initial={{x:"-90%",opacity:0}}
      animate={{x:"-0%",opacity:1}}
      transition={{duration:.85,ease:"easeOut"}}
    className='maxident d-flex'>
      <div className= {open ? 'col-lg-10 col-md-11 wrap-konten' : 'col-lg-12 wrap-konten col-md-11 '}>
        <div 
          className='col-10 test-wrap'>
          <Routes>
            <Route path="/" exact element={<Intro />} />
            <Route path="/creadit"  element={<Creadit />} />
            <Route path="/mv"  element={<Mv />} />
            <Route path="/lirik"  element={<Lirik />} />
            <Route path="/foto"  element={<Poto />} />
            <Route path="/test"  element={<Test />} />
          </Routes>
        </div>
      </div>
      <div className='toggle' onClick={handleOpen}>toggle</div>
      <div className={open ? 'col-2 bg-white sidebar sideOpen' : 'col-2 bg-white sidebar'}>
      <div className='wave'>
        <img src={wave} alt="wave"/>
      </div>
         <Sidebar/> 
      </div>
      <div className={openMobile ? 'col-12 bg-white sidebar sideOpen mobile' : 'mobile col-12 bg-white sidebar'}>
      <div className='wave'>
        <img src={wave} alt="wave"/>
      </div>
         <Sidebar/> 
      </div>
     
    </m.div>
  );
}

export default Maxident;
