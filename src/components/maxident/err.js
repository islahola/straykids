import React from 'react';
import group from '../../assets/image/gallery/maxident_all_group.jpg'
import SwiperGallery from '../content/swiper';
const Err = () => {
  return (
    <div className='col-12'>
      <div className=' wrap_galery grup'>
        <img src={group}/>
      </div>
      <div className=' wrap_galery individual'>
        <SwiperGallery/>
      </div>
    </div>
  );
}

export default Err;
