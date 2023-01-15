import React,{useState} from 'react';
import Intro from '../components/oddinery/intro';
import {
  Route,
  Routes,
} from "react-router-dom";
import Mv from '../components/oddinery/mv';
import Creadit from '../components/oddinery/creadit';
import Poto from '../components/oddinery/poto';
import Lirik from '../components/oddinery/lirik';
import Test from '../components/maxident/test';
import wave from '../assets/vector/waveBlack.png'
import { motion as m } from 'framer-motion'
import Sidebar from '../components/oddinery/sidebar';
import toggle from '../assets/icon/bar.png'

const Oddenery = () => {
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
      className='maxident d-flex oddinery'>
      <div className='toggle' onClick={handleOpen}>
        <img src={toggle}/>
      </div>
      <div className={open ? 'col-2 bg-black sidebar sideOpen side-oddinery' : 'col-1 bg-black sidebar'}>
      <div className='waveBlak'>
        <img src={wave} alt="wave"/>
      </div>
         <Sidebar /> 
      </div>
      <div className={openMobile ? 'col-12 bg-black sidebar sideOpen mobile side-oddinery' : 'mobile col-12 bg-black sidebar side-oddinery'}>
         <Sidebar/> 
      </div>
      <div className= {open ? 'col-lg-10 col-md-11 wrap-konten' : 'col-lg-10 wrap-konten col-md-11 '}>
        <div 
          className='col-10 test-wrap m-auto'>
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
    </m.div>
  );
}

export default Oddenery;
