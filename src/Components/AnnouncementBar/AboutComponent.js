import React from 'react'
import '../AnnouncementBar/AboutComponent.css'
import TopAnnouncementBar from './TopAnnouncementBar'
import Navbar from './Navbar';
import Section9 from '../Section9'
import Section10 from '../Section10'
export default function AboutComponent() {
    return <>
        <TopAnnouncementBar />

        <Navbar />

        <div className='aboutdiv1'>

        </div>

        <div className='aboutdiv2'>
            Our Story
        </div>

        <div className='aboutdiv3'>
            <div className='aboutdiv3left'>
                <p>A little info about who we are, what we do, where we came from and our aspirations for the future...<br /><br />We thank you for shopping with us and hope that this is just the beginning.</p>
            </div>

            <div className='aboutdiv3right'>
                <iframe className='our-story-part1-image' style={{ width: "100%", height: "100%" }} src="https://www.youtube.com/embed/neFK-pv2sKY" allowfullscreen></iframe>
            </div>
        </div>

        <div className='aboutdiv4'>
            <div className='aboutdiv4left'>
                <div className='aboutdiv4leftinner'>

                </div>
            </div>
            <div className='aboutdiv4right'>
                <p>Our story began in 2001 in a small studio in the middle of nowhere.<br /><br />With only one desk and next to no free time, our brand was born. Our passion for unique design and collaboration brought our vision, and products, to life.</p>
            </div>
        </div>

        <div className='aboutdiv5'>
            <div className='aboutdiv5left'>
            <p>Our products bring together the finest materials and stunning design to create something very special. We believe in quality, care, and creating unique products that everyone can enjoy.</p>
            <p>Colorful, creative, and inspired by what we see everyday, each product represents what we love about the world we live in.</p>
            <p>We hope they’ll inspire you too.</p>
            </div>
            <div className='aboutdiv5right'>
                <div className='aboutdiv5rightinner'></div>
            </div>
        </div> <br/>

        <Section9/>

        <Section10/>

    </>
}
