import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Case123 from '../case123';
import BannerYt from '../content/bannerYt';
import Intro from './intro';


const Test = () => {
  
  return (
    <div className='test d-flex'>
      <div className='col-3 '><Case123/> </div>
      <div className='col-9 '>
        <div className='col-10 m-auto'>
        <Routes>
          <Route path="/" exact element={<BannerYt/>} />
          {/* <Route path={`/${id}`} exact element={<BannerYt/>} /> */}
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default Test;
