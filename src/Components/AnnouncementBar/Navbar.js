import React, { useState } from 'react'
import Hove from './Hove'
import Products from '../Products.json'
import { ReactComponent as Search } from '../Svgs/Search.svg'
import { ReactComponent as Customer } from '../Svgs/Customer.svg'
import { ReactComponent as Shopping } from '../Svgs/Shopping.svg'
import { ReactComponent as Arrow } from '../Svgs/Arrow.svg'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar() {

    const navigate = useNavigate()

    const [hover, setHover] = useState(false)

    const MouseHover = () => {
        setHover(true)
    }

    const MouseOut = () => {
        setHover(false)
    }

    const GoShop = ()=>{
        navigate('/shopcomponent')
    }

    const GoBlog = ()=>{
        navigate('/blogcomponent')
    }

    const GoContact = ()=>{
        navigate('/contactcomponent')
    }

    const GoAbout = ()=>{
        navigate('/aboutcomponent')
    }

    const Account = ()=>{
        navigate('/account')
    }

    const Home = ()=>{
        navigate('/')
    }
    return <>
        <div className='NavigationBar'>
            <span className='span5'>
                {Products.map((items) => {
                    return <>
                        
                            <span className='combospan' onMouseOver={() => { MouseHover() }} onMouseOut={()=>{MouseOut()}} onClick={()=>{GoShop()}}>
                            <span className='shop'>{items.shop}</span>
                                <span className='arrow'><Arrow /></span>
                            </span>
                    
                        <span className='blog' onClick={()=>{GoBlog()}}>{items.blog}</span>
                        <span className='contact' onClick={()=>{GoContact()}}>{items.contact}</span>
                        <span className='about' onClick={()=>{GoAbout()}}>{items.about}</span>
                    </>
                })}
            </span>

            <span className='span6' onClick={()=>{Home()}} style={{cursor:"pointer"}}>
                <img src="//fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=1200" alt="" srcset="//fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=200 200w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=300 300w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=400 400w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=500 500w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=600 600w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=700 700w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=800 800w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=1000 1000w, //fashionopolism-secret-sale.myshopify.com/cdn/shop/files/logo.jpg?v=1620077064&amp;width=1200 1200w" width="230px" height="20px" loading="eager" fetchpriority="high" sizes="(min-width: 500px) 2000px,
                 (min-width: 768px) and (max-width: 1600px) 1200px,
                 (max-width: 767px) 100vw, 900px"/>
            </span>

            <span className='span7'>
                <span className='search'>
                    <Search /> <span className='account' style={{cursor:"pointer"}} onClick={Account}>Account</span>
                </span>
                <span className='cart'>
                    <Customer />
                    <span className='cart1'>Cart</span>
                </span>
                <span className='zero'>
                    <Shopping /><span className='zero1'>0</span>
                </span>
            </span>

            {hover == true ? <Hove/> : ""}
        </div>
    </>
}
