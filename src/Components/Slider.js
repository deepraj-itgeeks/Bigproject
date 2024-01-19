import React from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'
import { useNavigate } from 'react-router-dom'
export default function Slider() {
  const navigate =  useNavigate()


  const GOShop = ()=>{
    navigate('shopcomponent')
  }

  
  return <>
    
    <div className='slider'>
            <h2>STEP INTO SUMMER</h2>
            <p>A LOOK AT OUR FRESHEST FINDS</p>
            <button className='button1' onClick={GOShop}>SHOP SUMMER</button>
        </div>
  </>
}
