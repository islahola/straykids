import React from 'react';
import Case123 from '../case123';
import { motion as m } from 'framer-motion'

const Mv = () => {
  return (
    <div>
       <m.h1 
        initial={{y:"90%"}}
        animate={{y:"0%"}}
        transition={{duration:.75,ease:"easeOut"}}
       className='judul'>MAX<span>IDENT</span></m.h1>
      <m.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:.90,ease:"easeOut"}}
      class="d-flex mv">
        <div className='col-12'>
          <Case123/>
        </div>
      </m.div>
    </div>
  );
}

export default Mv;
