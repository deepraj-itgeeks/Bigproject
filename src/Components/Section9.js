import React from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'

import { ReactComponent as Facebook } from '../Components/Svgs/Facebook.svg'
import { ReactComponent as Twitter } from '../Components/Svgs/Twitter.svg'
import { ReactComponent as Logo } from '../Components/Svgs/Logo.svg'
import { ReactComponent as Instagram } from '../Components/Svgs/Instagram.svg'
export default function Section9() {
    return <>
        <div className='section9'>
            <div className='section9div1'>
                <h4>Subscribe to our newsletter</h4>
                <p>Signup for our newsletter to stay up to date on sales and events.</p>
            </div>
            <div className='section9div2'>
                <span className='section9span1'>
                    <input className='input1' type='text' placeholder='Enter Your Email Address' />
                    <input className='input2' type='submit' value='Join' />
                </span>
                <div className='first' style={{paddingLeft:"0px"}}>
                    <span className='span1'><Facebook /></span>
                    <span className='span2'><Twitter /></span>
                    <span className='span3'><Logo /></span>
                    <span className='span4'><Instagram /></span>
                </div>
            </div>
        </div>
    </>
}
