import React from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'
import { useNavigate } from 'react-router-dom'
export default function Section1() {

    const navigate = useNavigate()

    const Arrivals = ()=>{
        navigate('ArrivalsComponent')
    }

    const Soiree = ()=>{
        navigate('ArrivalsComponent')
    }

    const Accessories = ()=>{
        navigate('ArrivalsComponent')
    }
  return<>
        <div className='section1' onClick={()=>{Arrivals()}}>
            <span className='image1'>
                <h5>NEW ARRIVALS</h5>
                <p>EXPLORE</p>
            </span>
            <span className='image2' onClick={()=>Soiree()}>
                <h5>SOIREE READY</h5>
                <p>EXPLORE</p>
            </span>
            <span className='image3' style={{marginTop:"45px"}} onClick={()=>Accessories()}>
                <h5>ACCESSORIES</h5>
                <p>EXPLORE</p>
            </span>
        </div>

  </>
}
