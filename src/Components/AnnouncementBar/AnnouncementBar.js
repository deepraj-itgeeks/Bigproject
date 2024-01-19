import React, { useEffect, useState } from 'react'
import '../AnnouncementBar/AnnouncementBar.css'
import 'react-flags-select'
import "react-multi-carousel/lib/styles.css";
import Products from '../Products.json'
import 'swiper/css';
import 'swiper/css/navigation';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import Slider from '../Slider'
import Section1 from '../Section1'
import Newlook from '../Newlook'
import Viewbutton from '../Viewbutton'
import Section2 from '../Section2'
import Shop from '../Shop'
import Section4 from '../Section4'
import Inspired from '../Inspired'
import Section5 from '../Section5'
import BestSelling from '../BestSelling'
import Section7 from '../Section7'
import Section8 from '../Section8'
import Section9 from '../Section9'
import Section10 from '../Section10'
import TopAnnouncementBar from './TopAnnouncementBar'
import Navbar from './Navbar';
import CardComponent from './CardComponent';
import { useNavigate } from 'react-router-dom';
export default function AnnouncementBar() {

   const navigate = useNavigate()

   const Section3 = ()=>{
     navigate('ArrivalsComponent2')
   }

    return <>
       
      <div className='mainparent'>
      <TopAnnouncementBar/>
        
        <Navbar/>
 
        <Slider />

        <Section1 />

        <Newlook />

       <CardComponent/>

        <Viewbutton />

        <Section2 />

        <Shop />

        <div className='section3' onClick={()=>{Section3()}}>
            {Products.map((data, index) => {
                return <>
                    {index === 0 ? data.images.map((items) => {
                        return <>
                            <div className='section3div'>
                                <div className='section3div1'>
                                    <img src={items.image} style={{ height: "440px", width: "100%" }} className='fourcardimage'/>
                                </div>
                                <div className='section3div2'><b>{items.name}</b> {items.title}</div>
                            </div>
                        </>
                    }) : null}
                </>
            })}
        </div>

        <Section4 />

        <Inspired />

        <Section5 />

        <BestSelling />


        <CardComponent/>


        <div className='section6'>
            {Products.map((items, index) => {
                return <>
                    {index === 0 ? items.freecontain.map((data) => {
                        return <>
                            <div className='section6first'>
                                <h4>{data.freeshipping}</h4>
                                <span>{data.freeshippingdata}</span>
                            </div>
                            <span className='defaultspan'></span>
                        </>
                    }) : null}
                </>
            })}
        </div>

        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </div>
    </>
}
