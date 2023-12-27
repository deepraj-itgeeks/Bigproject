import React, { useState } from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'
import { ReactComponent as Facebook1 } from '../Components/Svgs/Facebook1.svg'
import { ReactComponent as Twitter1 } from '../Components/Svgs/Twitter1.svg'
import { ReactComponent as Logo1 } from '../Components/Svgs/Logo1.svg'
import { ReactComponent as Instagram1 } from '../Components/Svgs/Instagram1.svg'
import {ReactComponent as Image1} from '../Components/Svgs/Image1.svg'
import {ReactComponent as Image2} from '../Components/Svgs/Image2.svg'
import {ReactComponent as Image3} from '../Components/Svgs/Image3.svg'
import {ReactComponent as Image4} from '../Components/Svgs/Image4.svg'
import {ReactComponent as Image5} from '../Components/Svgs/Image5.svg'
import {ReactComponent as Image6} from '../Components/Svgs/Image6.svg'
import {ReactComponent as ArrowButton} from '../Components/Svgs/ArrowButton.svg'
import ReactFlagsSelect from "react-flags-select";
export default function Section10() {

    
    const [selected, setSelected] = useState("")
    return <>
        <div className='section10'>
            <div className='section10div1'>
                <span className='section10span1'>
                    <h6>THEME DEMOS</h6><br />
                    <li>Empire</li>
                    <li>Popup Shop</li>
                    <li>Galleria</li>
                    <li>Them Features</li>
                </span>
                <span className='section10span2'>
                    <h6>RECEPT POSTS</h6><br />
                    <li>3 Day Detox</li>
                    <li>Lunch party</li>
                    <li>Walk your way to healthy</li>
                </span>
                <span className='section10span3'>
                    <h6>ABOUT</h6><br />
                    <li>Since 2007 We are Underground have been building</li>
                    <li>Shopify themes for merchants around the globe.</li>
                    <li>Each theme includes <strong>Free</strong> support and <strong>Free</strong> updates.</li>
                </span>
            </div>
            <hr />
            <div className='section10div2'>
                <span className='section10span4'>
                    <div className='first' style={{ paddingLeft: "0px" }}>
                        <span className='span1'><Facebook1 /></span>
                        <span className='span2'><Twitter1 /></span>
                        <span className='span3'><Logo1 /></span>
                        <span className='span4'><Instagram1 /></span>
                    </div>
                    <span className='section10span5'>
                        <li>© 2023 Fashionopolism - Haute • Website builder by Shopify</li>
                    </span>
                </span>

                <span className='section10rightspan'>
                    <span className='section10rightspan1'>
                        <ReactFlagsSelect className='flages'
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                        />
                    </span>
                    <span className='section10rightspan2'>
                         <Image1/>
                         <Image2/>
                         <Image3/>
                         <Image4/>
                         <Image5/>
                         <Image6/>
                    </span>
                </span>
                <span className='section10rightspan3'>
                        <button className='arrowbutton'>
                            <ArrowButton/>
                        </button>
                    </span>
            </div>
        </div>
    </>
}
