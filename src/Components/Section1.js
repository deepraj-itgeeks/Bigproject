import React from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'
import { useNavigate } from 'react-router-dom'
export default function Section1() {

    const navigate = useNavigate()

    const Arrivals = () => {
        navigate('ArrivalsComponent')
    }

    const Soiree = () => {
        navigate('ArrivalsComponent')
    }

    const Accessories = () => {
        navigate('ArrivalsComponent')
    }
    return <>

        <div className='section1' onClick={() => { Arrivals() }}>
            <div className='firsthe'>
                <div className='image1'>
                    <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/gallery__image-one.jpg?v=1643320722&width=500' style={{ height: "100%", width: "100%" }} />
                    <div className='section1heading1 s'>
                        <h5>NEW ARRIVALS</h5>
                        <p>EXPLORE</p>
                    </div>
                </div>
            </div>
            <div className='secondhe' onClick={() => Soiree()}>
                <div className='image2'>
                    <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/gallery__image-three.jpg?v=1643320740&width=500' style={{ height: "100%", width: "100%" }} />
                    <div className='section1heading2 overlay'>
                        <h5>SOIREE READY</h5>
                        <p>EXPLORE</p>
                    </div>
                </div>
            </div>
            <div className='thirdhe' onClick={() => Accessories()}>
                <div className='image3'>
                    <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/gallery__image-two.jpg?v=1643320766&width=500' style={{ height: "100%", width: "100%" }} />
                    <div className='section1heading3 overlay'>
                        <h5>ACCESSORIES</h5>
                        <p>EXPLORE</p>
                    </div>
                </div>
            </div>
        </div>

    </>
}
