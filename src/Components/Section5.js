import React from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'
export default function Section5() {
  return <>
    <div className='section5'>
            <div className='section5div1'>

            </div>
            <div className='section5div2'>
                <div className='div2first'>
                     <div className='div2firstleft'></div>
                     <div className='div2firstright'>
                        <span style={{fontWeight:"bold"}}>Stella Top</span>
                        <span>$59.95</span>
                        <button className='selectoption'>Select options</button>
                        <button className='details'>Details</button>
                     </div>
                </div>
                <hr/>
                <div className='div2second'>
                     <div className='div2secondleft'></div>
                     <div className='div2secondright'>
                     <span style={{fontWeight:"bold"}}>Lucia Jeans</span>
                        <span>
                        <span style={{color:"red"}}>$45.00</span>
                        <span><strik>$79.95</strik></span>
                        </span>
                        <button className='selectoption1'>Select options</button>
                        <button className='details1'>Details</button>
                     </div>
                </div>
            </div>
        </div>

  </>
}
