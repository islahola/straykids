import React from 'react';
import han from '../../assets/image/gallery/maxident_han.jpg'
import mino from '../../assets/image/gallery/maxident_felix.jpg'
import chan from '../../assets/image/gallery/maxident_bang_chan.jpg'
import min from '../../assets/image/gallery/maxident_seungmin.jpg'
import felix from '../../assets/image/gallery/maxident_felix.jpg'
import bin from '../../assets/image/gallery/maxident_changbin.jpg'
import hj from '../../assets/image/gallery/maxident_hyunjin.jpg'
import jongin from '../../assets/image/gallery/maxident_in.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

const SwiperGallery = () => {
  return (
    <Swiper
    spaceBetween={5}
    slidesPerView={1}
    loop={true}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    navigation={true}
    modules={[Autoplay, Navigation]}  
    breakpoints={{
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    }}
  >
    <SwiperSlide><img src={chan}/></SwiperSlide>
    <SwiperSlide><img src={mino}/></SwiperSlide>
    <SwiperSlide><img src={bin}/></SwiperSlide>
    <SwiperSlide><img src={hj}/></SwiperSlide>
    <SwiperSlide><img src={han}/></SwiperSlide>
    <SwiperSlide><img src={felix}/></SwiperSlide>
    <SwiperSlide><img src={min}/></SwiperSlide>
    <SwiperSlide><img src={jongin}/></SwiperSlide>
  </Swiper>

  );
}

export default SwiperGallery;
