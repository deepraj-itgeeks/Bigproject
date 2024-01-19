import React, { useEffect, useState } from 'react'
import {ReactComponent as Cross} from '../Svgs/Cross.svg'
import axios from 'axios'
export default function Collection() {
    const [state, setState] = useState(1)
    const [state1, setState1] = useState(0)
    const [products, setProducts] = useState([])
    const [isChange, setIsChange] = useState([])

    const [add, setAdd] = useState("Add to cart")
    const [open, setOpen] = useState(false);

    const [generate, setGenerate] = useState()

    const [cursoredit, setCursorEdit] = useState()

    const [localdata, setLocalData] = useState([])

    const [localid, setLocalId] = useState([])

    const [totaladd, setTotalAdd] = useState()


    const handleClose = () => {
        setOpen(false);
    };


    const data = JSON.parse(localStorage.getItem("ApiData"))

    const data2 = JSON.parse(localStorage.getItem("DataApi"))




 


    const Possitive1 = (event) => {
        setLocalId(event.target.id)
        setState1(state1 + 1)

    }


    const Negative1 = (event) => {
        setLocalId(event.target.id)
         setState1(state1 - 1)
        
    }


    useEffect(() => {
        axios.get("https://fashionopolism-secret-sale.myshopify.com/products.json")
            .then((response) => {
                setProducts(response.data.products.slice(4, 8))
            })
    }, [])



    const Delete = (event) => {
        let index = localdata.findIndex(item => item.id == event.target.id)
        let items = localdata.splice(index, 1)
        setLocalData(items)
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
            sum = parseFloat(total[i].innerHTML)+ sum
            setTotalAdd(sum)
        }
        
    }, 2000);

  return <>
     <div style={{ overflowY: "scroll", height: "650px" }}>
                    <div className='modaldiv1'>
                        <div className='modalspan1'>Featured items</div>
                        <div className='modalspan2'><Cross style={{ cursor: "pointer" }} onClick={handleClose} /> <span className="carts">Cart</span> <span>5 Item(s)</span></div>
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
                                                                {ind == 0 ?  <span className='quantityspan2'> <button id={item.id} onClick={Negative1}>-</button>{state1}<button id={item.id} onClick={Possitive1}>+</button></span>: null}
                                                                {ind == 0 ? <><span style={{marginLeft:"60px"}}>$</span><li className='page'>{parseInt(item.price*state1)}</li></> : null}
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
                            <span className='totalspan'><li>Total</li></span>
                            <span className='buttonspan'><button className='ViewCartbutton'>View Cart</button><button className='CheckOutbutton'>Check out</button></span>
                        </div>
                    </div>
                </div>
         
  </>
}
