import React from 'react';
import { motion as m } from 'framer-motion'

const Intro = () => {
  return (
    <m.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:.75,ease:"easeOut"}}
    >
      <h1 className='judul'>OD<span>DINARRY</span></h1>

      <p>
      The title, Oddinary, is a portmanteau of two words: "odd" and "ordinary". It represents "all of us who are ordinary also have odd sides" and the idea that "odd things will soon become ordinary".In a StarNews interview on March 4, Stray Kids teased that the upcoming EP would show their "potential energy", be "crazy" in the meaning of "extraordinary", and show a "new side".      </p>
      
      
    </m.div>
  );
}

export default Intro;
