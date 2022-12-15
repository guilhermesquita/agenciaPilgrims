import { Swiper, SwiperSlide } from 'swiper/react';
import { Slides } from './style'

import 'swiper/css';
import { Black } from './Slides/Black/Black';

export const Slider = () => {
  return (
<Slides>
    <Swiper
      spaceBetween={400}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide><Black/></SwiperSlide>
        <SwiperSlide><Black/></SwiperSlide>
        <SwiperSlide><Black/></SwiperSlide>
        <SwiperSlide><Black/></SwiperSlide>
      
    </Swiper>
  </Slides>
  );
};