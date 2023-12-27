import React, { useEffect, useState } from 'react'
import '../AnnouncementBar/AnnouncementBar.css'
import 'react-flags-select'
import { ReactComponent as Facebook } from '../Svgs/Facebook.svg'
import { ReactComponent as Twitter } from '../Svgs/Twitter.svg'
import { ReactComponent as Logo } from '../Svgs/Logo.svg'
import { ReactComponent as Instagram } from '../Svgs/Instagram.svg'
import { ReactComponent as Arrow } from '../Svgs/Arrow.svg'
import { ReactComponent as Search } from '../Svgs/Search.svg'
import { ReactComponent as Customer } from '../Svgs/Customer.svg'
import { ReactComponent as Shopping } from '../Svgs/Shopping.svg'
import "react-multi-carousel/lib/styles.css";
import ReactFlagsSelect from "react-flags-select";
import Products from '../Products.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import Slider from '../Slider'
import Section1 from '../Section1'
import Newlook from '../Newlook'
import Viewbutton from '../Viewbutton'
import Section2 from '../Section2'
import Shop from '../Shop'
import Section4 from '../Section4'
import Inspired from '../Inspired'
import Section5 from '../Section5'
import BestSelling from '../BestSelling'
import Section7 from '../Section7'
import Section8 from '../Section8'
import Section9 from '../Section9'
import Section10 from '../Section10'
export default function AnnouncementBar() {

    const [selected, setSelected] = useState("")
    const [products, setProducts] = useState([])
    const [isChange,setIsChange] = useState([])

    const HandleMouseOver = (index)=>{
        const imagetool = [...isChange]
        imagetool[index] = true;
        setIsChange(imagetool)
    }

    const HandleMouseOut = (index)=>{
        const imagetool = [...isChange]
        imagetool[index] = false;
        setIsChange(imagetool)
    }

    useEffect(() => {
        axios.get("https://fashionopolism-secret-sale.myshopify.com/products.json")
            .then((response) => {
                setProducts(response.data.products)
            })
    }, [])



    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return <>
        <div className='AnnouncementBar'>
            <div className='first'>
                <span className='span1'><Facebook /></span>
                <span className='span2'><Twitter /></span>
                <span className='span3'><Logo /></span>
                <span className='span4'><Instagram /></span>
            </div>

            <div className='second'>
                <Swiper navigation={true} modules={[Navigation]} loop={true} className='swiper'>
                    <SwiperSlide className='topBarSlide'><strong className='strong'>FREE SHIPPING ON ORDERS OVER $100</strong></SwiperSlide>
                    <SwiperSlide className='topBarSlide'><strong className='strong'>FREE 90 DAY RETURNS</strong></SwiperSlide>
                </Swiper>
            </div>

            <div className='third'>
                <ReactFlagsSelect className='flages'
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                />
            </div>
        </div>

        <div className='NavigationBar'>
            <span className='span5'>
                {Products.map((items) => {
                    return <>
                        <span className='combospan'>
                            <span className='shop'>{items.shop}</span>
                            <span className='arrow'><Arrow /></span>
                        </span>
                        <span className='blog'>{items.blog}</span>
                        <span className='contact'>{items.contact}</span>
                        <span className='about'>{items.about}</span>
                    </>
                })}
            </span>

            <span className='span6'>
                <img src="//fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=1200" alt="" srcset="//fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=200 200w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=300 300w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=400 400w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=500 500w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=600 600w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=700 700w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=800 800w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=1000 1000w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=1200 1200w" width="230px" height="20px" loading="eager" fetchpriority="high" sizes="(min-width: 500px) 2000px,
                 (min-width: 768px) and (max-width: 1600px) 1200px,
                 (max-width: 767px) 100vw, 900px"/>
            </span>

            <span className='span7'>
                <span className='search'>
                    <Search /> <span className='account'>Account</span>
                </span>
                <span className='cart'>
                    <Customer />
                    <span className='cart1'>Cart</span>
                </span>
                <span className='zero'>
                    <Shopping /><span className='zero1'>0</span>
                </span>
            </span>
        </div>

        <Slider />

        <Section1 />

        <Newlook />

        {/* <div className='section2'>
                <span className='image4'>
                    <button className='button2'>Quick Shop</button>
                </span>
                <span className='image5'>
                    <button className='button3'>Ouick Shop</button>
                </span>
                <span className='image6'>
                    <button className='button4'>Ouick Shop</button>
                </span>
                <span className='image7'>
                    <button className='button5'>Ouick Shop</button>
                </span>
        </div> */}

        <div className='carts-div'>
            <div className="new-looks-carousel-area">

                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}

                >
                    {products.map((data,ind) => {
                        return <div className='carousel-card'>
                            <img src={(isChange[ind]===true)?data.images[0].src : data.images[1].src} alt="" className='card-image' onMouseOver={()=>{HandleMouseOver(ind)}} onMouseOut={()=>{HandleMouseOut(ind)}}/>
                            <div class="middle">
                                <div class="text">Quick Shop</div>
                            </div>
                            <center>
                                <div className="carousel-card-text-area">
                                    <span>Elden Top</span>
                                    <span>$ {data.variants[0].price}</span>
                                    <span className='apispan'>
                                        <img src={data.images[0].src} alt="" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                                    </span>
                                    <span className='carousel-cart-size-area'>{data.options[0].values}</span>
                                    <span className='carousel-card-types-circles'></span>
                                </div>
                            </center>
                        </div>

                    })}

                </Carousel>

            </div>
        </div>

        <Viewbutton />

        <Section2 />

        <Shop />

        <div className='section3'>
            {Products.map((data, index) => {
                return <>
                    {index === 0 ? data.images.map((items) => {
                        return <>
                            <div className='section3div'>
                                <div className='section3div1'>
                                    <img src={items.image} style={{ height: "440px", width: "100%" }} />
                                </div>
                                <div className='section3div2'><b>{items.name}</b> {items.title}</div>
                            </div>
                        </>
                    }) : null}
                </>
            })}
        </div>

        <Section4 />

        <Inspired />

        <Section5 />

        <BestSelling />


        <div className='carts-div'>
            <div className="new-looks-carousel-area">

                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}

                >
                    {products.map((data,ind) => {
                        return <div className='carousel-card'>
                              <img src={(isChange[ind]===true)?data.images[0].src : data.images[1].src} alt="" className='card-image' onMouseOver={()=>{HandleMouseOver(ind)}} onMouseOut={()=>{HandleMouseOut(ind)}}/>
                            <div class="middle">
                                <div class="text">Quick Shop</div>
                            </div>
                            <center>
                                <div className="carousel-card-text-area">
                                    <span>Elden Top</span>
                                    <span>$ {data.variants[0].price}</span>
                                    <span className='apispan'>
                                        <img src={data.images[0].src} alt="" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                                    </span>
                                    <span className='carousel-cart-size-area'>{data.options[0].values}</span>
                                    <span className='carousel-card-types-circles'></span>
                                </div>
                            </center>
                        </div>

                    })}

                </Carousel>

            </div>
        </div>

        <div className='section6'>
            {Products.map((items, index) => {
                return <>
                    {index === 0 ? items.freecontain.map((data) => {
                        return <>
                            <div className='section6first'>
                                <h4>{data.freeshipping}</h4>
                                <span>{data.freeshippingdata}</span>
                            </div>
                            <span className='defaultspan'></span>
                        </>
                    }) : null}
                </>
            })}
        </div>

        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
    </>
}
