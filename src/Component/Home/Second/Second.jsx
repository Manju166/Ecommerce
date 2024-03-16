import { Swiper, SwiperSlide } from 'swiper/react';
import alltime from '../../../assets/alltimesupport.png'
import happy from '../../../assets/happyselling.png'
import promo from '../../../assets/promotion.png'
import online from '../../../assets/oorder.jpeg'
import save from '../../../assets/savemoney.jpg'
import shipping from '../../../assets/shipping.jpg'
import './Second.scss'
import 'swiper/css';
 const Second = () => {
  return (
    <>
    <div className="second">
    <span>What We</span>
    <span>Do??</span>
      <Swiper
      spaceBetween={5}
      slidesPerView={4}
      grabCursor={true}
      className='s-slider'
    >
      <SwiperSlide>
      <img src={alltime} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={happy} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={online} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={save} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={shipping} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={promo} alt="" />
      </SwiperSlide>
    </Swiper>

    </div>
    </>
  )
}
export default Second
