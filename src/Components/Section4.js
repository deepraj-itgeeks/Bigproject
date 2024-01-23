import React from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'
import { useNavigate } from 'react-router-dom'
export default function Section4() {
  const navigate = useNavigate()
  const GoToCart = ()=>{
    navigate('shopcomponent')
  }
  return <>
    <div className='section4'>
            <h2>ACCESSORIZE IN STYLE</h2>
            <p className='section4para'>FIND YOUR LOOK IN OUR CAREFULLY CURATED COLLECTIONS</p>
            <button className='shopall' onClick={GoToCart}>SHOP ALL</button>
        </div>
  </>
}
