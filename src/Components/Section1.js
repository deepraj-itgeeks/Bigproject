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

        <div className='section1' onClick={()=>{Arrivals()}}>
            <div className='firsthe'>
                <div className='image1'>
                    <h5>NEW ARRIVALS</h5>
                    <p>EXPLORE</p>
                </div>
            </div>
            <div className='secondhe' onClick={()=>Soiree()}>
                <div className='image2'>
                    <h5>SOIREE READY</h5>
                    <p>EXPLORE</p>
                </div>
            </div>
            <div className='thirdhe' onClick={()=>Accessories()}>
                <div className='image3'>
                    <h5>ACCESSORIES</h5>
                    <p>EXPLORE</p>
                </div>
            </div>
        </div>

    </>
}
