import React from 'react';
import { motion as m } from 'framer-motion'

const Intro = () => {
  return (
    <m.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:.75,ease:"easeOut"}}
    >
      <h1 className='judul'>MAX<span>IDENT</span></h1>

      <p>
      Maxident, is a portmanteau of "max" or "maximum" and "accident" or "incident",likening the emotions and feelings of love to a massive, unexpected event.
      </p>
      <p>
      Released on October 7th, MAXIDENT features eight new songs (including three unit ones) and the album’s title track, “CASE 143”.
      Stray Kids have their hands all over the mini album with the highly experienced producing and rap sub-unit, 3RACHA (consisting of members Bang Chan, Changbin, and Han) having writing and composing credits for over six songs on the project.
      </p>
      
    </m.div>
  );
}

export default Intro;
