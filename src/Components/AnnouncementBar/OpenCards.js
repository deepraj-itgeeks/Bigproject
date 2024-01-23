import React, { useState, useRef, useEffect } from 'react'
import TopAnnouncementBar from './TopAnnouncementBar'
import { ReactComponent as ArrivalArrow } from '../Svgs/ArrivalArrow.svg'
import { ReactComponent as ArrivalArrow2 } from '../Svgs/ArrivalArrow2.svg'
import { ReactComponent as Stars } from '../Svgs/Stars.svg'
import { ReactComponent as Image1 } from '../Svgs/Image1.svg'
import { ReactComponent as Image2 } from '../Svgs/Image2.svg'
import { ReactComponent as Image3 } from '../Svgs/Image3.svg'
import { ReactComponent as Image4 } from '../Svgs/Image4.svg'
import { ReactComponent as Image5 } from '../Svgs/Image5.svg'
import { ReactComponent as Image6 } from '../Svgs/Image6.svg'
import { ReactComponent as Icon1 } from '../Svgs/Icon1.svg'
import { ReactComponent as Icon2 } from '../Svgs/Icon2.svg'
import { ReactComponent as Icon3 } from '../Svgs/Icon3.svg'
import { ReactComponent as Cross } from '../Svgs/Cross.svg'
import Section9 from '../Section9'
import Section10 from '../Section10'
import Navbar from './Navbar'
import '../AnnouncementBar/OpenCards.css'
import '../AnnouncementBar/AnnouncementBar.css'
import Countdown from 'react-countdown'
import { Icon, TextField } from '@mui/material'
import axios from 'axios'
import Modal from '../AnnouncementBar/Modal.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'
export default function OpenCards() {
    // const Ref = useRef(null);

    const navigate = useNavigate()

    const [state, setState] = useState(1)
    const [state1, setState1] = useState([])
    const [products, setProducts] = useState([])
    const [isChange, setIsChange] = useState([])

    const [add, setAdd] = useState("Add to cart")
    const [open, setOpen] = useState(false);

    const [generate, setGenerate] = useState()

    const [cursoredit, setCursorEdit] = useState()

    const [localdata, setLocalData] = useState([])

    const [localid, setLocalId] = useState([])

    const [totaladd, setTotalAdd] = useState()

    const [match, setMatch] = useState(0)

    const [detail1,setDetail1] = useState()
    const [detail2,setDetail2] = useState()
    const [detail3,setDetail3] = useState()
    const [detail4,setDetail4] = useState()


    const handleClose = () => {
        setOpen(false);
    };


    const data = JSON.parse(localStorage.getItem("ApiData"))

    const data2 = JSON.parse(localStorage.getItem("DataApi"))


    const Counter = ({ days, hours, minutes, seconds, completed }) => {
        return <span>{days} : {hours} : {minutes} : {seconds}</span>
    }

    const Possitive = () => {
        setState(state + 1)
    }

    const Negative = () => {
        setState(state - 1)
    }

    // const Possitive1 = (event) => {
    //     console.log(state1)
    //     const temparr = [...state1];
        
    //     temparr[`name${parseInt(event.target.id)}`] = (state1[event.target.id] === undefined )? 0+1 : state1[event.target.id] + 1;
    //     console.log(temparr)
    //     setLocalId(event.target.id)
        
    //     setState1(temparr)
       

    // }

    const Possitive1 = (event) => {
        const dynamicPropertyName = `name${parseInt(event.target.id)}`;
      
        setLocalId(event.target.id);
      
        setState1((prevState) => ({
          ...prevState,
          [dynamicPropertyName]:
            prevState[dynamicPropertyName] === undefined ? 1 : prevState[dynamicPropertyName] + 1,
        }));
      };
    


    const Negative1 = (event) => {
        const dynamicPropertyName = `name${parseInt(event.target.id)}`;
        setLocalId(event.target.id)
        setState1((prevState) => ({
            ...prevState,
            [dynamicPropertyName]:
              prevState[dynamicPropertyName] === undefined ? 0 : prevState[dynamicPropertyName] - 1,
          }));

    }

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
                console.log(response.data)
                setProducts(response.data.products.slice(4, 8))
            })
    }, [])


    const AddCart = () => {
        setAdd("Adding...")
        setTimeout(() => {
            setAdd("Add to cart")
            setOpen(true)
        }, 1000);
        setLocalData(data2)

    }

    const AddCart1 = () => {
        setOpen(true)
        setLocalData(data2)
    }

    const Delete = (event) => {
        let index = localdata.findIndex(item => item.id == event.target.id)
        const localdatatemp = [...localdata]
        let items = localdata.splice(index, 1)
        localdatatemp.splice(index, 1)
        setLocalData(items)
        localStorage.setItem('DataApi', JSON.stringify(localdatatemp))
        setLocalData([...localdata])

    }

    const Generatediv = () => {
        setGenerate(true)
    }

    const Cursor = (event) => {
        setCursorEdit(event.target.value)
    }

    setTimeout(() => {
        const total = document.getElementsByClassName("page");
        var sum = 0;
        for (var i = 0; i < total.length; i++) {
            sum = parseInt(total[i].innerHTML) + sum
            setTotalAdd(sum)
        }

    }, 2000);

    const SlicingImages = (ind) => {
        setMatch(ind)
    }

    const CheckOut = ()=>{
        navigate("/paymentgetway")
    }

    const Detail1 = ()=>{
        setDetail1(true)
        setDetail2(false)
        setDetail3(false)
        setDetail4(false)
    }

    const Detail2 =()=>{
        setDetail2(true)
        setDetail1(false)
        setDetail3(false)
        setDetail4(false)
    }

    const Detail3 = ()=>{
        setDetail3(true)
        setDetail1(false)
        setDetail2(false)
        setDetail4(false)
    }

    const Detail4 = ()=>{
        setDetail4(true)
        setDetail1(false)
        setDetail2(false)
        setDetail3(false)
    }
    return <>

        <TopAnnouncementBar />

        <Navbar />

        <div className='opencarddiv1'>
            <span className='opencardspan1'>
                <h5 style={{ fontWeight: "bold" }}>New Year Sale Now On</h5>
                <p>Save up to 50% on selected style <span style={{ cursor: "pointer" }}><u>Explore</u></span></p>
            </span>
            <span className='opencardspan2'>
                <h4>
                    <Countdown renderer={Counter} date={Date.now() + 2037000000}></Countdown>
                </h4>
                <p>Days : Hours : Mins : Secs</p>
            </span>
        </div>

        <div className='opencarddiv2'>
            <div className='div2firstcart'>
                {data.images.slice(0, 5).map((itm, ind) => {
                    return <>
                        <div className='div2firstinners' onClick={() => SlicingImages(ind)} style={{ cursor: "pointer" }}>
                            <img src={itm.src} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                        </div>
                    </>
                })}
            </div>
            <div className='div2secondcart' style={{ cursor: "pointer" }}>
                {data.images.map((itm, ind) => {
                    return <>
                        {ind == match ?
                            <img src={itm.src} style={{ width: "100%", height: "100%" }} />
                            : null
                            // <img src={itm.src} style={{ width: "100%", height: "100%" }} />
                            }
                    </>
                })}
            </div>
            <div className='div2third'>
                <span className='bigspan1'>
                    <span className='opancardspan3'>
                        <h4 style={{ fontWeight: "bold" }}>{data.title}</h4>
                        <span className='arrowspan'><ArrivalArrow /> <ArrivalArrow2 /></span>
                    </span>

                    <span className='opancardspan4'>
                        {data.variants.map((item, ind) => {
                            return <>
                                {ind == 0 ? <p>${parseFloat(item.price * state)}</p> : null}
                            </>
                        })}
                    </span>
                </span>

                <span className='bigspan2'>
                    <span className='starspan'> <Stars /><Stars /><Stars /><Stars /><Stars /></span> No reviews
                </span>

                <span className='bigspan3'>
                    <span>Model stats: Size 6</span>
                    <span>Height. 5`6`` Bust.33``.W.24''</span>
                </span>

                <span className='bigspan4'>
                    <span className='bigspan4first'>
                        {data.options.map((item, ind) => {
                            return <>
                                {ind == 0 ?
                                    <span>{item.name} {item.values[0]}</span>
                                    : null}
                            </>
                        })}
                        <span><u>Size chart</u></span>
                    </span>
                    <span className='blackbox'>
                        {data.tags.slice(1, 4).map((item) => {
                            return <>
                                <span className='sizespan'>{item}</span>
                            </>
                        })}
                    </span>
                </span>

                <span className='bigspan5'>
                    Quantity <span className='quantityspan'> <button onClick={Negative}>-</button>{state}<button onClick={Possitive}>+</button></span>
                </span>

                <span className='bigspan6'>
                    <button className='addcart' onClick={() => { AddCart() }}><span id='addspan'>{add}</span></button>
                    <button className='buy'>Buy it now</button>
                </span>


                <span className='bigspan7'>
                    <span>Secure online checkout</span>
                    <span className='section10rightspan2'>
                        <Image1 />
                        <Image2 />
                        <Image3 />
                        <Image4 />
                        <Image5 />
                        <Image6 />
                    </span>
                </span>

                <span className='bigspan8'>
                    <button className='detailsbutton' onClick={()=>Detail1()}><u>Details</u></button>
                    <button className='returns' onClick={()=>Detail2()}><u>Returns</u></button>
                    <button className='shipping' onClick={()=>Detail3()}><u>Shipping</u></button>
                    <button className='question' onClick={()=>Detail4()}><u>Ask a question</u></button>
                </span>

                {detail1 == true ? <>
                    <span className='bigspan9'>
                    <span style={{ fontWeight: 'bold' }}>Details</span>
                    <span style={{ marginLeft: "10px" }}>
                        <li>Collared shirt</li>
                        <li>Loose fit</li>
                        <li>Button down front</li>
                        <li>Hi-lo hemline</li>
                        <li>Batwing sleeve</li>
                    </span>
                </span>

                <span className='bigspan10'>
                    <span style={{ fontWeight: 'bold' }}>Garment Care</span>
                    <span style={{ marginLeft: "10px" }}>
                        <li>Viscose</li>
                        <li>Cool gentle hand wash</li>
                    </span>
                </span>

                <span className='bigspan11'>
                    Modal's height is 168cm
                </span>

                <span className='bigspan12'>
                    All product in this store can be purchased from <u style={{ fontWeight: "bold" }}>Elle and Andi</u>
                </span>

                </> : null}


                {detail2 == true ? <>
                    <div className='returnsdetail'>
                    <span><b>Free</b> Returns on all items if returned unworn in original packing including all labels.</span>
                    <span>We regret that we can not accept returns on items that have been used.</span>
                    <span>If you are unhappy with your purchase or would like to return item, contact us and we will arrange pickup at our cost.</span>
                 </div> 
                </> : null}

                {detail3 == true ? <>
                    <div className='shippingdetail'>
                    <span>We offer free 3 day shipping on all products.</span>
                    <span>Next day shipping is available at an additional cost and may be calculated at checkout.</span>
                </div>

                </> : null}


                {detail4 == true ? <>
                    <div className='askquestion'>
                    <span>Add text which will be shown in tabs across all product pages</span>

                    <TextField   label="Name"  />
                    <TextField   label="Email"  />
                    <TextField   label="Phone Number"   />
                    <TextField label="Message"/>

                    <button className='detailsendbutton'>Send</button>

                </div>
                </> : null}
                <span className='bigspan13'>
                    <span style={{ fontWeight: "bold" }}>Pare it with</span>
                            <div className='threeimagediv'>
                                {data.images.map((item, ind) => {
                                    return <>
                                        {ind == 0 ?
                                            <>
                                                <div className='threeimagedivleft'>
                                                    <img src={item.src} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                                </div>
                                            </>
                                            : null}
                                    </>
                                })}
                                <div className='threeimagedivright'>
                                    <span style={{ fontWeight: "bold" }}>{data.title}</span>
                                    {data.variants.map((item, ind) => {
                                        return <>
                                            {ind == 0 ? <span>${item.price}</span> : null}
                                        </>
                                    })}
                                    <button className='selectopbutton' onClick={() => { AddCart1() }}>Select options</button>
                                </div>
                            </div>
                </span>
            </div>
        </div>

        <div className='opencarddiv3'>
            <span className='openspan3first'><Icon1 /> Secure online shopping</span>
            <span className='openspan3second'><Icon2 /> Award winning support</span>
            <span className='openspan3third'><Icon3 /> Global shipping available</span>
        </div>

        <div className='opencarddiv4'>
            <div className='opencarddiv4inner'>
                <h4>Customer Reviews</h4>
                <div className='reviewandwrite'><span>No reviews yet</span> <span><u>Write a review</u></span></div>
            </div>
        </div>

        <div className='opencarddiv5'>
            <h5>YOU MIGHT LIKE</h5>
        </div>

        <div className='contactdiv5'>
            {products.map((data, ind) => {
                return <div className='carousel-card'>
                    <img src={(isChange[ind] === true) ? data.images[0].src : data.images[1].src} alt="" className='card-image' onMouseOver={() => { HandleMouseOver(ind) }} onMouseOut={() => { HandleMouseOut(ind) }} />
                    <div class="middle">
                        <div class="text">Quick Shop</div>
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

            })}
        </div>

        <div className='arrivaldiv5'>
            <div className='arrivaldiv5left'>
                <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/fash___tamara-bellis-0C2qrwkR1dI-unsplash.jpg?v=1629224016&width=800' style={{ maxWidth: "100%" }} />
                <span className='leftspan'>
                    <h4>NEW ARRIVALS</h4>
                    <button className='arrivalshopnow'>Shop Now</button>
                </span>
            </div>
            <div className='arrivaldiv5center'>
                <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/fash__jonathan-borba-XJt51hAa3z8-unsplash.jpg?v=1629222523&width=700' />
                <span className='centerspan'>
                    <h4>Dresses</h4>
                    <button className='arrivalshopnow'>Shop Now</button>
                </span>
            </div>
            <div className='arrivaldiv5right'>
                <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/fash___vanessa-serpas-U0m4t8tD8Sk-unsplashjpg.jpg?v=1629222503&width=700' />
                <span className='rightspan'>
                    <h4>Dresses</h4>
                    <button className='arrivalshopnow'>Shop Now</button>
                </span>
            </div>
        </div><br />
        <Section9 />

        <Section10 />
        <Modal isOpen={open} >
            <>
                <div className='firstmodaldiv1' style={{ overflowY: "scroll", height: "600px" }}>
                    <div className='modaldiv1'>
                        <div className='modalspan1'>Featured items</div>
                        <div className='modalspan2'><Cross style={{ cursor: "pointer" }} onClick={handleClose} /> <span className="carts">Cart</span> <span>Item(s)</span></div>
                    </div>
                    <div className='modaldiv2'>
                        <div className='modaldiv2left'>
                            {products.map((itm, ind) => {
                                return <>
                                    <div className='modaldiv2leftinner'>
                                        <div className='modaldiv2leftinnertop'>
                                            <img src={itm.images[0].src} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                        </div>
                                        <div className='modaldiv2leftinnerbotton'>
                                            {itm.title}
                                            {itm.variants.map((item, ind) => {
                                                return <>
                                                    {ind == 0 ? <span>{item.price}</span> : null}
                                                </>
                                            })}
                                        </div>
                                    </div>
                                </>
                            })}
                        </div>

                        <div className='modaldiv2right'>
                            {localdata.map((item, ind) => {
                                return <>
                                    {item.images.slice(0, 1).map((itm, ind) => {
                                        return <>
                                            <div className='modaldiv2rightinner'>
                                                <div className='modaldiv2rightinnerleft'>
                                                    <img src={itm.src} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                                </div>
                                                <div className='modaldiv2rightinnerright'>
                                                    <span className='mdspan1'>{item.title}  <Cross id={item.id} style={{ cursor: "pointer" }} onClick={Delete} /></span>
                                                    {item.options.map((item, ind) => {
                                                        return <>
                                                            {ind == 0 ?
                                                                <span>{item.name} {item.values[0]}</span>
                                                                : null}
                                                        </>
                                                    })}
                                                    <span className='mdspan2'>
                                                        {item.variants.map((item, ind) => {
                                                            return <>
                                                                {ind == 0 ? <span className='quantityspan2'> <button id={item.id} onClick={Negative1}>-</button><span className='buttonspanhe'>{(state1[`name${parseInt(item.id)}`] === undefined)?1 :state1[`name${parseInt(item.id)}`]}</span><button id={item.id} onClick={Possitive1}>+</button></span> : null}
                                                                {ind == 0 ? <><span style={{display:"flex"}}><span className='doller'>$</span><li className='page'>{(state1[`name${parseInt(item.id)}`] === undefined)? item.price:parseInt(item.price * state1[`name${parseInt(item.id)}`])}</li></span></> : null}
                                                            </>
                                                        })}
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    })}
                                </>
                            })}
                            <div className='modaldiv2rightfirst'>
                                <div className='firstchild1'>
                                    <input type='checkbox' /> Gift wrap (free)
                                </div>
                            </div>

                            <div className='modaldiv2rightsecond'>
                                <div className='firstchild2'>
                                    Leave a note with your order <span style={{ cursor: "pointer" }} onClick={Generatediv}>+</span>
                                </div>
                            </div>

                            <div contentEditable type='text' className='modaldiv2rightthird' style={{ display: generate == true ? "block" : "none", cursor: cursoredit == "" ? "progress" : "pointer" }} onInput={Cursor}></div>
                            <div className='modaldiv2rightfour'>
                                <li>Your order quilifies for Free Domestic</li>
                                <li>Shipping!</li>
                                <li>(Excludes International)</li>
                            </div>

                            <div className='modaldiv2rightfive'>
                                <span className='rightfivespan1'><li>Subtotal</li> <span>${totaladd}</span></span>
                                <span className='rightfivespan2'><li>Calculated at</li></span>
                                <span className='rightfivespan3'><li>Shipping</li> <li>Checkout</li></span>
                            </div>
                            <hr />
                            <span className='totalspan'><li>Total</li><li>${totaladd}</li></span>
                            <span className='buttonspan'><button className='ViewCartbutton'>View Cart</button><button className='CheckOutbutton' onClick={()=>{CheckOut()}}>Check out</button></span>
                        </div>
                    </div>
                </div>
            </>
        </Modal>
    </>
}
