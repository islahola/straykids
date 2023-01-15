import React from 'react';
import Kreadit from '../content/kreadit';
import { motion as m } from 'framer-motion'

const Creadit = () => {
  return (
    <m.div
      initial={{y:"100%"}}
      animate={{y:"0%"}}
      transition={{duration:.75,ease:"easeOut"}}
    >
      <h1 className='judul'>MAX<span>IDENT</span></h1>
      <div class="accordion accordion-flush creadit" id="accordionFlushExample">
        <Kreadit name="Title Track - Case 143" id="case123"/>
        <Kreadit name=" B-side : Chill" id="chill"/>
        <Kreadit name="B-side : Superboard" id="sp"/>
        <Kreadit name="B-side : Give me your TMI" id="tmi"/>
        <Kreadit name="B-side : Circus" id="cicus"/>
        <Kreadit name="Sub-unit : Taste" id="taste"/>
        <Kreadit name="Sub-unit : 3Racha" id="racha"/>
        <Kreadit name="Sub-unit : I Can't Stop" id="cant"/>
    </div>
    </m.div>
  );
}

export default Creadit;

