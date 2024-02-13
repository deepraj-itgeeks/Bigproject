import React, { useState } from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'
import Modal2 from '../Components/AnnouncementBar/Modal2.js'
import '../Components/AnnouncementBar/Modal2.css'
import { ReactComponent as Cross } from '../Components/Svgs/Cross.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'
export default function Section5() {
   const [open, setOpen] = useState(false);
   const [active, setActive] = useState(1)
   const [active2,setActive2] = useState()
   const [image1, setImage1] = useState()
   const [image2, setImage2] = useState()

   const [addition,setAddition] = useState(1)


   const navigate = useNavigate()

   const OpenModal = () => {
      setOpen(true)
   }

   const OpenModal2 = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false);
   };

   const ChangeColor1 = (event) => {
      setActive(event.target.id)
      setActive2(event.target.id)
      
   }

   const ChangeColor2 = (event) => {
      setActive(event.target.id)
      setActive2(event.target.id)
      
   }

   const ChangeColor3 = (event) => {
      setActive(event.target.id)
      setActive2(event.target.id)
      
   }

   const ChangeColor4 = (event) => {
      setActive(event.target.id)
      setActive2(event.target.id)
      
   }

   const ChangeColor5 = (event) => {
      setActive(event.target.id)
      setActive2(event.target.id)
      
   }


   const Slide1 = () => {
      setImage1(true)
      setImage2(false)

   }

   const Slide2 = () => {
      setImage2(true)
      setImage1(false)
   }

   const Substract =()=>{
        if(addition <=0)
        {
         setAddition(addition)
        }
        else{
         setAddition(addition - 1)
        }
   }

   const Additon =()=>{
      setAddition(addition + 1)
   }

   const OpenDetail = ()=>{
      navigate('/opencard')
   }
   return <>
      <div className='section5'>
         <div className='section5div1'>

         </div>
         <div className='section5div2'>
            <div className='div2first'>
               <div className='div2firstleft'></div>
               <div className='div2firstright'>
                  <span style={{ fontWeight: "bold" }}>Stella Top</span>
                  <span>$59.95</span>
                  <button className='selectoption' onClick={OpenModal}>Select options</button>
                  <button className='details' onClick={OpenDetail}>Details</button>
               </div>
            </div>
            <hr />
            <div className='div2second'>
               <div className='div2secondleft'></div>
               <div className='div2secondright'>
                  <span style={{ fontWeight: "bold" }}>Lucia Jeans</span>
                  <span style={{ display: "flex", gap: "10px" }}>
                     <span style={{ color: "red" }}>$45.00</span>
                     <span><strike>$79.95</strike></span>
                  </span>
                  <button className='selectoption1' onClick={OpenModal2}>Select options</button>
                  <button className='details1' onClick={OpenDetail}>Details</button>
               </div>
            </div>
         </div>
      </div>
      <Modal2  isOpen={open} >
         <div className='topmodaldiv' style={{overflowY:"scroll"}} >
            <div className='modal2div1'>
               <span><Cross style={{ cursor: "pointer" }} onClick={handleClose} /></span>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               <SwiperSlide><div className='modal2div2' >
                  {image1 == true ? <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/products/EmptyName_1605.jpg?v=1620058321&width=1400'  style={{ maxWidth: "100%", maxHeight: "100%"}} /> : image1 == false ? <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/products/EmptyName_1636.jpg?v=1693425244&width=300' style={{ maxWidth: "100%", maxHeight: "100%",backgroundSize:"contain",backgroundRepeat:"no-repeat" }} /> : <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/products/EmptyName_1605.jpg?v=1620058321&width=1400'  style={{ maxWidth: "100%", maxHeight: "100%"}} />}
               </div></SwiperSlide>
               <SwiperSlide><div className='modal2div3'>
                  {image1 == true ? <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/products/EmptyName_1636.jpg?v=1693425244&width=300'  style={{ maxWidth: "100%", maxHeight: "100%"}} /> : image1 == false ? <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/products/EmptyName_1605.jpg?v=1620058321&width=1400' style={{ maxWidth: "100%", maxHeight: "100%",backgroundSize:"contain",backgroundRepeat:"no-repeat" }} /> : <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/products/EmptyName_1636.jpg?v=1693425244&width=300'  style={{ maxWidth: "100%", maxHeight: "100%"}} /> }
               </div></SwiperSlide>
            </Swiper>
            <span className='secondmodalspan1'>
               <span className='modal2span1'>
                  Stella Top
               </span>

               <span className='modal2span2'>
                  ${parseInt("59.95"*addition)}
               </span>
            </span>

            <span className='secondmodalspan2'>
               <span className='modal2span3'>Size: {active2 == "1" ? "8" : active2 == "2" ? "10" : active2 == "3" ? "12" : active2 == "4" ? "14" : active2 == "5" ? "16" : "8"}</span>

               <span className='secondmodalspanbuttons'>
                  <button id='1' className='modalbutton1' style={{ backgroundColor: active == "1" ? "black" : "", color: active == "1" ? "white" : "black" }} onClick={ChangeColor1}>8</button>
                  <button id='2' className='modalbutton2' style={{ backgroundColor: active == "2" ? "black" : "", color: active == "2" ? "white" : "black" }} onClick={ChangeColor2}>10</button>
                  <button id='3' className='modalbutton3' style={{ backgroundColor: active == "3" ? "black" : "", color: active == "3" ? "white" : "black" }} onClick={ChangeColor3}>12</button>
                  <button id='4' className='modalbutton4' style={{ backgroundColor: active == "4" ? "black" : "", color: active == "4" ? "white" : "black" }} onClick={ChangeColor4}>14</button>
                  <button id='5' className='modalbutton5' style={{ backgroundColor: active == "5" ? "black" : "", color: active == "5" ? "white" : "black" }} onClick={ChangeColor5}>16</button>

               </span>
            </span>

            <span className='secondmodalspan3'>
               <span>Color: {image1 == true ? "Black" : "White"}</span>
               <div className='imagesdivs'>
                  <div className='modalimagediv1' onClick={()=>{Slide1()}}></div>
                  <div className='modalimagediv2' onClick={()=>{Slide2()}}></div>
               </div>
            </span>
            
            <span className='secondmodalspan4'>
                <span>Quantity</span>
                <span className='secondmodalbuttonspan'>
                   <button onClick={Substract} className='subbutton'>-</button>
                   <span style={{width:"20px"}}>{addition}</span>
                   <button onClick={Additon} className='addbutton'>+</button>
                </span>
            </span>

            <span className='secondmodalspan5'>
                  <button className='addcart1'>Add to cart</button>
                  <button className='buy1'>Buy it now</button>
            </span>
         </div>
      </Modal2>

   </>
}
