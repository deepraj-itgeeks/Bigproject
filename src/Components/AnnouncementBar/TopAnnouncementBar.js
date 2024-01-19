import React, { useState } from 'react'
import '../AnnouncementBar/AnnouncementBar.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ReactComponent as Facebook } from '../Svgs/Facebook.svg'
import { ReactComponent as Twitter } from '../Svgs/Twitter.svg'
import { ReactComponent as Logo } from '../Svgs/Logo.svg'
import { ReactComponent as Instagram } from '../Svgs/Instagram.svg'
import ReactFlagsSelect from "react-flags-select";
export default function TopAnnouncementBar() {
    const [selected, setSelected] = useState("")
  return <>
      <div className='AnnouncementBar'>
            <div className='first'>
                <span className='span1'><Facebook /></span>
                <span className='span2'><Twitter /></span>
                <span className='span3'><Logo /></span>
                <span className='span4'><Instagram /></span>
            </div>

            <div className='second'>
                <Swiper navigation={true} modules={[Navigation]} loop={true} className='swiper'>
                    <SwiperSlide className='topBarSlide'><strong className='strong'>FREE SHIPPING ON ORDERS OVER $100</strong></SwiperSlide>
                    <SwiperSlide className='topBarSlide'><strong className='strong'>FREE 90 DAY RETURNS</strong></SwiperSlide>
                </Swiper>
            </div>

            <div className='third'>
                <ReactFlagsSelect className='flages'
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                />
            </div>
        </div>
  </>
}
