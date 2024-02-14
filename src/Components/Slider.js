import React from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'
import { useNavigate } from 'react-router-dom'
export default function Slider() {
  const navigate = useNavigate()


  const GOShop = () => {
    navigate('shopcomponent')
  }


  return <>

    {/* <div className='slider'>
            <h2>STEP INTO SUMMER</h2>
            <p>A LOOK AT OUR FRESHEST FINDS</p>
            <button className='button1' onClick={GOShop}>SHOP SUMMER</button>
        </div> */}


    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div className='carouselfirst'>
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/hero_slide_1.jpg?v=1620067690&width=1200" alt="First slide" />
          </div>
          <div className='slideheaddiv overlay1' >
            <h2 className='stepintosummer'>STEP INTO SUMMER</h2>
            <p className='alook'>A LOOK AT OUR FRESHEST FINDS</p>
            <button className='button1' onClick={GOShop}>SHOP SUMMER</button>
          </div>
        </div>
      </div>
    </div>
  </>
}
