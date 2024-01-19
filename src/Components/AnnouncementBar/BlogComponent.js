import React from 'react'
import '../AnnouncementBar/BlogComponent.css'
import TopAnnouncementBar from './TopAnnouncementBar'
import Navbar from './Navbar';
import Section9 from '../Section9'
import Section10 from '../Section10'
import { useNavigate } from 'react-router-dom';
export default function BlogComponent() {
    const navigate = useNavigate()

    const ApiImages = JSON.parse(localStorage.getItem("ApiData"))

    console.log(ApiImages)

    const ShopThisProduct = () => {
        navigate('/opencard')
    }
    return <>
        <TopAnnouncementBar />

        <Navbar />

        <div className='blogdiv1'>
            <h2>News</h2>
        </div>

        <div className='blogdiv2'>
            <p>A behind the scenes look at the crazy that we bring daily.</p>
        </div>

        <div className='blogdiv3'>
            <div className='blogdiv3left'>
                <div className='blogdivleft1'>
                    <div className='blogdivleft1innerleft'></div>
                    <div className='blogdivleft1innerright'>
                        <span style={{ fontWeight: "bold" }}>3 Day Detox</span>
                        <span>Underground Posted on June 10 2020</span>
                        <span>The Free 3-Day Detox Diet Plan is a plan to cleanse your body, to clear your mind and to uplift your spirit. The detox works by restricting, for a short time, the food and beverages you consume. It allows you to be renewed and replenished. Some people go to a plush spa to rejuvenate themselves</span>
                        <li><button className='btn' style={{ fontWeight: 'bold', paddingLeft: "0px" }}>Read More</button></li>
                    </div>
                </div>

                <div className='blogdivleft2'>
                    <div className='blogdivleft2innerleft'></div>
                    <div className='blogdivleft2innerright'>
                        <span style={{ fontWeight: "bold" }}>Lunch Party</span>
                        <span>Underground Posted on December 10 2015</span>
                        <span>Over the past months, we know you have put up with us asking questions about your shopping habits, answered surveys about where else you like to buy and what you like and dislike about our website. Well, we listened and think that we came up with something perfect that will make us your favorite online shopping destination.</span>
                        <li><button className='btn' style={{ fontWeight: 'bold', paddingLeft: "0px" }}>Read More</button></li>
                    </div>
                </div>

                <div className='blogdivleft3'>
                    <div className='blogdivleft3innerleft'></div>
                    <div className='blogdivleft3innerright'>
                        <span style={{ fontWeight: "bold" }}>Walk you way to healthy</span>
                        <span style={{ marginTop: "-15px" }}>Underground Posted on September 26 2015</span>
                        <span>We put together some easy to implement changes to your daily routine that are not life changing but will help you do a little more towards getting back on the road to a healthier lifestyle.</span>
                        <li><button className='btn' style={{ fontWeight: 'bold', paddingLeft: "0px" }}>Read More</button></li>
                    </div>
                </div>
            </div>
            <div className='blogdiv3right'>
                <div className='blogdiv3rightfirst'>
                    <span style={{ fontWeight: "bold" }}>Explore</span>
                    <span>Best Selling</span>
                    <span>New Arrivals</span>
                    <span>Sale</span>
                    <span>Tops</span>
                    <span>Dresses</span>
                    <span>Bottoms</span>
                </div>

                <div className='blogdiv3rightsecond'>
                    {ApiImages.images.slice(0,1).map((itm, ind) => {
                        return <>
                            <div className='blogdiv3rightsecondinner'>
                                 <img src={itm.src} style={{height:"100%",width:"100%"}}/>
                            </div>
                        </>
                    })}
                    <span className='charlotte'>
                        <li>{ApiImages.title}</li>
                        {ApiImages.variants.slice(0,1).map((itm,ind)=>{
                            return<>
                              <li>${itm.price}</li>
                            </>
                        })}
                    </span>
                    <button className='shopproductbutton' onClick={() => { ShopThisProduct() }}>Shop This Product</button>
                </div>

                <div className='blogdiv3rightthird'>
                    <span className='subscribe'>
                        <li style={{ fontWeight: "bold" }}>Subscribe</li>
                        <li>Explain the benifit of</li>
                        <li>subscribing</li>
                    </span>
                    <input className='address' type='address' placeholder='Enter Your Email Address' style={{ border: "1px solid #dddddd", outline: "none" }} />

                    <button className='joinbutton'>Join</button>
                </div>

            </div>
        </div>

        <div className='blogdiv4'>
            Showing items 1-3 of 3
        </div>

        <Section9 />

        <Section10 />

    </>
}
