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
      <h1 className='judul'>OD<span>DINARRY</span></h1>
      <div class="accordion accordion-flush creadit" id="accordionFlushExample">
        <Kreadit name="Title Track - Maniac" id="case123"/>
        <Kreadit name=" B-side : Venom" id="chill"/>
        <Kreadit name="B-side : Frezz" id="sp"/>
        <Kreadit name="B-side : Chammer" id="tmi"/>
        <Kreadit name="B-side : Lonely St." id="cicus"/>
        <Kreadit name="Sub-unit : Waiting For Us" id="taste"/>
        <Kreadit name="Sub-unit : Muddy Water" id="racha"/>
    </div>
    </m.div>
  );
}

export default Creadit;

