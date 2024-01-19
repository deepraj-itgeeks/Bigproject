import React, { useEffect, useState } from 'react'
import '../AnnouncementBar/AnnouncementBar.css'
import Products from '../Products.json'
import 'swiper/css';
import 'swiper/css/navigation';
import Carousel from 'react-multi-carousel';
import axios from 'axios';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import Modal from '../AnnouncementBar/Modal2';
import { useDispatch, useSelector } from 'react-redux';
import { ContainData4 } from '../Redux/MasterSlice';
import { ReactComponent as Cross } from '../Svgs/Cross.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
export default function CardComponent() {

    const navigate = useNavigate()

    const [realid, setRealId] = useState()
    const [realid2, setRealId2] = useState()
    const [realid3, setRealId3] = useState()
    const [realid4, setRealId4] = useState()

    const [products, setProducts] = useState([])
    const [isChange, setIsChange] = useState([])

    const [open, setOpen] = useState(false)

    const [active, setActive] = useState(1)

    const [check, setCheck] = useState()

    const [black, setBlack] = useState()

    const [state, setState] = useState(1)

    const HandleMouseOver = (index) => {
        const imagetool = [...isChange]
        imagetool[index] = true;
        setIsChange(imagetool)
    }

    const HandleMouseOut = (index) => {
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

    const Cards = (data) => {
        localStorage.setItem("ApiData", JSON.stringify(data))
        const tempdata = (JSON.parse(localStorage.getItem("DataApi"))) ? JSON.parse(localStorage.getItem("DataApi")) : []
        const temp = [...tempdata];
        temp.push(data)
        localStorage.setItem("DataApi", JSON.stringify(temp))
        // setGoValue(temp)
        // localStorage.setItem("ApiData",JSON.stringify(data))
        navigate('opencard')
    }

    const QuickShop = (data, data1, data2, data3) => {
        setOpen(true)
        setRealId(data)
        setRealId2(data1)
        setRealId3(data2)
        setRealId4(data3)

    }



    const Close = () => {
        setOpen(false)
    }

    const ChangeColor1 = (event) => {
        setActive(event.target.id)
    }
    const ChangeColor2 = (event) => {
        setActive(event.target.id)
    }
    const ChangeColor3 = (event) => {
        setActive(event.target.id)
    }
    const ChangeColor4 = (event) => {
        setActive(event.target.id)
    }

    const ChangeColor5 = (event) => {
        setActive(event.target.id)
    }

    const Check1 = () => {
        setCheck(true)
        var color1 = "black"
        setBlack(color1)
    }

    const Check2 = () => {
        setCheck(false)
        var color2 = "black"
        setBlack(color2)
    }

    const Negative = () => {
        setState(state - 1)
    }

    const Positive = () => {
        setState(state + 1)
    }

    const Select = (data, data1, data2, data3)=>{
        setOpen(true)
        setRealId(data)
        setRealId2(data1)
        setRealId3(data2)
        setRealId4(data3)
    }
    return <>
        <div className='carts-div'>
            <div className="new-looks-carousel-area">

                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}

                >
                    {products.map((data, ind) => {
                        return <>
                            <div className='carousel-card' >
                                <div className='carouselinnerdiv'>
                                <img src={(isChange[ind] === true) ? data.images[0].src : data.images[1].src} alt="" className='card-image' onMouseOver={() => { HandleMouseOver(ind) }} onMouseOut={() => { HandleMouseOut(ind) }} onClick={() => { Cards(data) }} />
                                <div class="middle">
                                    <div class="text" onClick={() => { QuickShop(data.images[0].src, data.images[1].src, data.title, data.variants[0].price) }}>Quick Shop</div>
                                </div>
                                <div className='cardchilddiv'>
                                   <button className='sel' onClick={()=>Select(data.images[0].src, data.images[1].src, data.title, data.variants[0].price)}>Select Option</button>
                                </div>
                                </div>
                                <center>
                                    <div className="carousel-card-text-area">
                                        <span>{data.title}</span>
                                        <span>$ {data.variants[0].price}</span>
                                        <span className='apispan'>
                                            <img src={data.images[0].src} alt="" style={{ height: "30px", width: "30px", borderRadius: "50%" }} />
                                        </span>
                                        <span className='carousel-cart-size-area'>{data.options[0].values}</span>
                                        <span className='carousel-card-types-circles'></span>
                                    </div>
                                </center>
                                <span className='new'>New</span>
                            </div>

                        </>

                    })}

                </Carousel>

            </div>
        </div>

        <Modal isOpen={open}>
            <div className='quickshopdiv'>
                <span className='quickshopspan1' onClick={() => { Close() }}>
                    <Cross />
                </span>

                <div className='quickshopdiv1'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            {check == true ? <img src={realid} style={{ height: "100%", width: "100%" }} /> : check == false ? <img src={realid2} style={{ height: "100%", width: "100%" }} /> : <img src={realid} style={{ height: "100%", width: "100%" }} />}
                        </SwiperSlide>
                        <SwiperSlide>
                            {check == true ? <img src={realid2} style={{ height: "100%", width: "100%" }} /> : check == false ? <img src={realid} style={{ height: "100%", width: "100%" }} /> : <img src={realid2} style={{ height: "100%", width: "100%" }} />}
                        </SwiperSlide>
                    </Swiper>
                </div>

                <span className='quickshopspan2'>
                    <span className='quickshopspan2first'>{realid3}</span>
                    <span className='quickshopspan2second'>${parseInt(realid4 * state)}</span>
                </span>

                <span className='quickshopspan3'>
                    <span className='quickshopspan3first'>Size:  {active == "1" ? "8" : active == "2" ? "10" : active == "3" ? "12" : active == "4" ? "14" : active == "5" ? "16" : "8"}</span>
                    <span className='quickshopspan3second'>
                        <button id='1' className='quickbutton1' style={{ backgroundColor: active == "1" ? "black" : "white", color: active == "1" ? "white" : "black" }} onClick={ChangeColor1}>8</button>
                        <button id='2' className='quickbutton2' style={{ backgroundColor: active == "2" ? "black" : "white", color: active == "2" ? "white" : "black" }} onClick={ChangeColor2}>10</button>
                        <button id='3' className='quickbutton3' style={{ backgroundColor: active == "3" ? "black" : "white", color: active == "3" ? "white" : "black" }} onClick={ChangeColor3}>12</button>
                        <button id='4' className='quickbutton4' style={{ backgroundColor: active == "4" ? "black" : "white", color: active == "4" ? "white" : "black" }} onClick={ChangeColor4}>14</button>
                        <button id='5' className='quickbutton5' style={{ backgroundColor: active == "5" ? "black" : "white", color: active == "5" ? "white" : "black" }} onClick={ChangeColor5}>16</button>
                    </span>
                </span>

                <span className='quickshopspan4'>
                    <span className='quickshopspan4first'>Color: {check == true ? "Black" : check == false ? "White" : "Black"}</span>
                    <span className='quickshopspan4second'>
                        <div className='quickshopspan4secondfirst' onClick={() => { Check1() }} style={{ border: check == true ? `1px solid ${black}` : "" }}>
                            <img src={realid} style={{ width: "100%", height: "100%" }} />
                        </div>
                        <div className='quickshopspan4secondsecond' onClick={() => { Check2() }} style={{ border: check == false ? `1px solid ${black}` : "" }}>
                            <img src={realid2} style={{ width: "100%", height: "100%" }} />
                        </div>
                    </span>
                </span>

                <span className='quickshopspan5'>
                    <span className='quickshopspan5first'>Quantity</span>
                    <span className='quickshopspan5second'>
                        <button className='span5negativebutton' onClick={Negative}>-</button>
                        <span style={{ width: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>{state}</span>
                        <button className='span5positivebutton' onClick={Positive}>+</button>
                    </span>
                </span>

                <span className='quickshopspan6'>
                    <button className='quickshopaddcart'>Add to cart</button>
                    <button className='quickshopbuyitnow'>Buy it now</button>
                </span>
            </div>
        </Modal>

    </>
}
