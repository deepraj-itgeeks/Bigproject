import React from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'
import { useNavigate } from 'react-router-dom'
export default function Section2() {
   const navigate = useNavigate()

   const ClickHere = ()=>{
    navigate('ArrivalsComponent')
   }
  return <>
      <div className='section2'>
           <div className='section2first'>
           <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/fash___vanessa-serpas-U0m4t8tD8Sk-unsplashjpg.jpg?v=1629222503&width=700'/>
           <div className='section2div1'>
                <h3 className='justin'>JUST IN</h3>
                <p className='collection'>A collection of our latest arrivals</p>
                <button className='shopbutton' onClick={()=>{ClickHere()}}>SHOP NEW</button>
            </div>
           </div>
           <div className='section2second'>
            <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/fash__jonathan-borba-XJt51hAa3z8-unsplash.jpg?v=1629222523&width=700'/>
           <div className='section2div2'>
                <h3 className='dresses'>Dresses</h3>
                <p className='perfect-dress'>Find the perfect dress</p>
                <button className='shopbutton1' onClick={()=>{ClickHere()}}>SHOP NEW</button>
            </div>
           </div>
        </div>
  </>
}
