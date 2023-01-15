import React from 'react';
import LirikParag from '../content/lirikParag';
import { motion as m } from 'framer-motion'

const Lirik = () => {
  return (
    <m.div 
      initial={{y:"100%"}}
      animate={{y:"0%"}}
      transition={{duration:.75,ease:"easeOut"}}
    class="row detail-lirik">
      <h1 className='judul'>MAX<span>IDENT</span></h1>
      <div class="col-4">
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#list-item-1">Case 123</a>
          <a class="list-group-item list-group-item-action" href="#list-item-2">Chill</a>
          <a class="list-group-item list-group-item-action" href="#list-item-3">Superboard </a>
          <a class="list-group-item list-group-item-action" href="#list-item-4">3racha</a>
          <a class="list-group-item list-group-item-action" href="#list-item-5">Taste </a>
        </div>
      </div>
      <div class="col-8 bg-white p-5">
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
          <h4 id="list-item-1">Title Track - case 143</h4>
          <LirikParag/>
          <div id='rg_embed_link_8377155' class='rg_embed_link' data-song-id='8377155'>Read <a href='https://genius.com/Stray-kids-case-143-lyrics'>“CASE 143” by Stray Kids</a> on Genius</div> 
          <h4 id="list-item-2">Beside Track - Chill</h4>
          <LirikParag/>
          <h4 id="list-item-3">Beside Track - Superboard</h4>
          <LirikParag/>
          <h4 id="list-item-4">Subgroup Track - 3racha</h4>
          <LirikParag/>
          <h4 id="list-item-5">Subgroup Track - Taste</h4>
          <LirikParag/>
        </div>
      </div>
    </m.div>
  );
}

export default Lirik;
