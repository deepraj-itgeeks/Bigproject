import React from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'
import { useNavigate } from 'react-router-dom'
export default function Section7() {
    const navigate = useNavigate()
    const Exploremore = ()=>{
      navigate('ArrivalsComponent2')
    }
  return <>
       <div className='section7'>
            <div className='sectionimagediv'>
            <div className='section7first'><div className='section7div1'></div></div>
            <div className='section7second'><div className='section7div2'></div></div>
            </div>
            <div className='section7div3'>
                <h6>SUMMER STATEMENTS</h6>
                <p>Take a peek at these sensational look for Summer! Get in quick as these hot items are sure to move fast!</p>
                <button className='explore' onClick={Exploremore}>Explore</button>
            </div>
        </div>
  </>
}
