import React, { useEffect, useState } from 'react'
import TopAnnouncementBar from './TopAnnouncementBar'
import Navbar from './Navbar';
import { ReactComponent as ArrivalArrow } from '../Svgs/ArrivalArrow.svg'
import { ReactComponent as ArrivalArrow2 } from '../Svgs/ArrivalArrow2.svg'
import Section9 from '../Section9'
import Section10 from '../Section10'
import '../AnnouncementBar/ArrivalsComponent2.css'
import Products from '../Products.json'
import { Checkbox } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function ArrivalsComponent() {
    const [products, setProducts] = useState([])
    const [isChange, setIsChange] = useState([])

    const [page, setPage] = useState(1)
    const [page2, setPage2] = useState(12)

    const [active, setActive] = useState("1")

    const [range1,setRange1] = useState(0)
    const [range2,setRange2] = useState(90)

    const navigate = useNavigate('')


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
                setProducts(response.data.products.splice(0, 36))
            })
    }, [])

    const LastPageIndex = page * page2;
    const FirstPageIndex = LastPageIndex - page2;
    const FinalData = products.slice(FirstPageIndex, LastPageIndex)



    const ChangeColor = (event) => {
        setPage(event.target.id)
        setActive(event.target.id)
    }

    const ChangeColor2 = (event) => {
        setPage(event.target.id)
        setActive(event.target.id)
    }

    const ChangeColor3 = (event) => {
        setPage(event.target.id)
        setActive(event.target.id)
    }

    const ChangeColor4 = (event) => {
        setPage(event.target.id)
        setActive(event.target.id)
    }

    const Range1 = (event)=>{
        setRange1(event.target.value)
   }

   const Range2 = (event)=>{
       setRange2(event.target.value)
   }

   const GOArrival = ()=>{
    navigate('/ArrivalsComponent')
}

const GoArrival2 = ()=>{
    navigate('/ArrivalsComponent2')
}

const GoShop = ()=>{
    navigate('/shopsale')
}

const ShopSale = ()=>{
    navigate('/shopsale')
}

    return <>
        <TopAnnouncementBar />

        <Navbar />

        <div className='arrivaldiv1'>
            <span>Dresses</span>
        </div>

        <div className='arrivaldiv2'>
            <div className='arrivaldiv2inner'>
                <h3 style={{ color: "#AF0000" }}>SALE now on</h3>
                <p style={{ color: "#AF0000" }}>Shop our mid Season sale for a range of discounted items</p>
                <button className='shopsale' onClick={()=>{ShopSale()}}>Shop Sale</button>
            </div>
        </div>

        <div className='arrivaldiv3'>
            <div className='arrivaldiv3left'>
                <span className='span1'>
                    <p style={{ fontWeight: "bold" }}>Sort by</p>
                    <hr />
                    <select className='select'>Type to filter
                        <option className='options'>Featured</option>
                        <option className='options'>Best Selling</option>
                        <option className='options'>Alphabalically,A-Z</option>
                        <option className='options'>Alphabalically,Z-X</option>
                        <option className='options'>Price, low to high</option>
                        <option className='options'>Price, high to low</option>
                        <option className='options'>Date, old to new</option>
                        <option className='options'>Date, new to old</option>
                    </select>
                </span>

                <span className='span2'>
                    <p style={{ fontWeight: "bold" }}>Availability</p>
                    <hr />
                    <input type='checkbox' /> In stock (43)<br />
                    <input type='checkbox' /> Out of stock (1)
                </span>

                <span className='span3'>
                    <p style={{ fontWeight: "bold" }}>Price</p>
                    <hr />
                    <span className='span3inner'>
                        <li className='span3li'>$</li> <input className='inputbox' type='text' placeholder={range1} /> <li className='span3li'>$</li> <input className='inputbox' type='text' placeholder={range2} />
                    </span>
                    <div class="filter-range__slider--wrapper  rangeclass">
                    <input type='range' id='range1' className='range1' onChange={(event)=>{Range1(event)}}/>
                        <input type='range' id='range2' className='range2' onChange={(event)=>{Range2(event)}}/>
                    </div>
                </span>

                <span className='span4'>
                    <p style={{ fontWeight: "bold" }}>Color</p>
                    <hr />

                    {Products.map((items, ind) => {
                        return <>
                            {ind == 0 ?
                                items.data.map((item) => {
                                    return <>
                                        <span className='roundspan1'>
                                            <div className='rounddiv1'>
                                                <div className='rounddiv1inner' style={{ backgroundColor: `${item.color}` }}></div>
                                            </div> {item.name} ({item.title})
                                        </span>
                                    </>
                                })
                                : null}
                        </>
                    })}


                </span>

                <span className='span5arrival'>
                    <p style={{ fontWeight: "bold" }}>Size</p>
                    <hr />
                    {
                        Products.map((items, ind) => {
                            return <>
                                {ind == 0 ?
                                    items.data1.map((item) => {
                                        return <>
                                            <input type='checkbox' />   {item.size} ({item.title})<br />
                                        </>
                                    })
                                    : null}
                            </>
                        })
                    }
                </span>

                <span className='span6'>
                    <p style={{ fontWeight: "bold" }}>Explore</p>
                    <hr />
                    <li>Best Selling</li>
                    <li>New Arrivals</li>
                    <li>Sale</li>
                    <li>Tops</li>
                    <li>Dresses</li>
                    <li>Buttons</li>
                </span>
            </div>

            <div className='arrivaldiv3right'>
                {FinalData.map((data, ind) => {
                    console.log(FinalData)
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
        </div>
        <div className='arrivaldiv4'>
            <ArrivalArrow />
            <button id='1' className='arrivalbutton1' onClick={ChangeColor} style={{ color: active == "1" ? "black" : "#DDDDDD" }}>1</button>
            <button id='2' className='arrivalbutton2' onClick={ChangeColor2} style={{ color: active == "2" ? "black" : "#DDDDDD" }}>2</button>
            <button id='3' className='arrivalbutton3' onClick={ChangeColor3} style={{ color: active == "3" ? "black" : "#DDDDDD" }}>3</button>
            <button id='4' className='arrivalbutton4' onClick={ChangeColor4} style={{ color: active == "4" ? "black" : "#DDDDDD" }}>4</button>
            <ArrivalArrow2 />
        </div>

        <div className='arrivaldiv5'>
            <div className='arrivaldiv5left'>
                <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/fash___tamara-bellis-0C2qrwkR1dI-unsplash.jpg?v=1629224016&width=800' style={{ maxWidth: "100%" }} />
                <span className='leftspan'>
                    <h4>NEW ARRIVALS</h4>
                    <button className='arrivalshopnow' onClick={()=>{GOArrival()}}>Shop Now</button>
                </span>
            </div>
            <div className='arrivaldiv5center'>
                <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/fash__jonathan-borba-XJt51hAa3z8-unsplash.jpg?v=1629222523&width=700' />
                <span className='centerspan'>
                    <h4>Dresses</h4>
                    <button className='arrivalshopnow' onClick={()=>{GoArrival2()}}>Shop Now</button>
                </span>
            </div>
            <div className='arrivaldiv5right'>
               <img src='https://fashionopolism-secret-sale.myshopify.com/cdn/shop/files/fash___vanessa-serpas-U0m4t8tD8Sk-unsplashjpg.jpg?v=1629222503&width=700'/>
                <span className='rightspan'>
                    <h4>Dresses</h4>
                    <button className='arrivalshopnow' onClick={()=>{GoShop()}}>Shop Now</button>
                </span>
            </div>
        </div><br />

        <Section9 />

        <Section10 />

    </>
}
