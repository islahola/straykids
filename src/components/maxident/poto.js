import React from 'react';
import Err from './err';
import { motion as m } from 'framer-motion'

const Poto = () => {
  return (
    <m.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:.80,ease:"easeOut"}}
   >
      <m.h1  initial={{y:"100%"}}
              animate={{y:"0%"}}
              transition={{duration:.80,ease:"easeOut"}} className='judul'>MAX<span>IDENT</span></m.h1>
      <Err/>
    </m.div>
  );
}

export default Poto;
