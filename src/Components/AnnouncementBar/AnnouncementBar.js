import React from 'react'
import '../AnnouncementBar/AnnouncementBar.css'
import { ReactComponent as Facebook } from '../Svgs/Facebook.svg'
import { ReactComponent as Twitter } from '../Svgs/Twitter.svg'
import { ReactComponent as Logo } from '../Svgs/Logo.svg'
export default function AnnouncementBar() {
    return <>
        <div className='AnnouncementBar1'>
            <div className='first'>
                <span className='span1'><Facebook /></span>
                <span className='span2'><Twitter /></span>
                <span className='span3'><Logo/></span>
            </div>
        </div>
    </>
}
