import React, { useEffect, useState } from 'react'
import './ContactComponent.css'
import TopAnnouncementBar from './TopAnnouncementBar'
import Navbar from './Navbar';
import Section9 from '../Section9'
import Section10 from '../Section10'
import { TextField, textFieldClasses } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ContainData3 } from '../Redux/MasterSlice';
import toast, { Toaster } from 'react-hot-toast';
export default function Contact() {

  const { Data3 } = useSelector((store) => store.masterData)

  const dispatch = useDispatch()

  const [products, setProducts] = useState([])
  const [isChange, setIsChange] = useState([])

  const [name, setName] = useState()
  const [name2, setName2] = useState()
  const [name3, setName3] = useState()
  const [name4, setName4] = useState()

  const [username, setUsername] = useState()
  const [useremail, setUseremail] = useState()
  const [userphone, setUserphone] = useState()
  const [usermessage, setUsermessage] = useState()

  const [nameerror, setNameError] = useState({})
  const [emailerror, setEmailError] = useState({})
  const [phoneerror, setPhoneError] = useState({})
  const [messageerror, setMessageError] = useState({})

  const [detail, setDetail] = useState([])

  const [realid, setRealId] = useState()
  const [realid2, setRealId2] = useState()
  const [realid3, setRealId3] = useState()
  const [realid4, setRealId4] = useState()

   const [open, setOpen] = useState(false)


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
        setProducts(response.data.products.splice(0, 8))
      })
  }, [])

  const Validation1 = (event) => {
    var name = event.target.value;
    setName(name)
    var value = event.target.value;
    var newError = { ...nameerror }
    if (value == "" || value == null) {
      newError[name] = "Please Enter Name"
    }
    else {
      newError[name] = ""
    }
    setNameError(newError)
    setUsername(value)
  }

  const Validation2 = (event) => {
    var name = event.target.value;
    setName2(name)
    var value = event.target.value;
    var newError = { ...emailerror }
    if (value == "" || value == null) {
      newError[name] = "Please Enter Email"
    }
    else if (value.includes("@gmail.com")) {
      newError[name] = ""
    }
    else {
      newError[name] = "Enter Valid Email"
    }
    setEmailError(newError)
    setUseremail(value)
  }

  const Validation3 = (event) => {
    var name = event.target.name;
    setName3(event.target.name)
    var value = event.target.value;
    var newError = { ...phoneerror }
    if (value == "" || value == null) {
      newError[name] = "Please Enter PhoneNumber"
    }
    else {
      newError[name] = ""
    }
    setPhoneError(newError)
    setUserphone(value)
  }

  const Validation4 = (event) => {
    var name = event.target.name;
    setName4(event.target.name)
    var value = event.target.value
    var newError = { ...messageerror }
    if (value == "" || value == null) {
      newError[name] = "Please Enter Message"
    }
    else {
      newError[name] = ""
    }
    setMessageError(newError)
    setUsermessage(value)
  }

  const Send = () => {
    setDetail((detail) => ({ ...detail, username, useremail, userphone, usermessage }))
    toast.success("Your Detail Successfully Send")
  }

  useEffect(() => {
    dispatch(ContainData3(detail))
  }, [detail])

  console.log(Data3)

  const Select = (data, data1, data2, data3)=>{
    setOpen(true)
    setRealId(data)
    setRealId2(data1)
    setRealId3(data2)
    setRealId4(data3)
}

  return <>
    <TopAnnouncementBar />

    <Navbar />

    <div className='contactdiv1'>

    </div>

    <div className='contactdiv2'>
      SEND US A MESSAGE
    </div>

    <div className='contactdiv3'>
      <div className='contactdiv3inner'>
        <TextField id="outlined-basic" name='username' label="Name" variant="outlined" className='textfield' InputLabelProps={{ style: { color: "black" } }} onInput={Validation1} />
        <span style={{ color: "red" }}>{nameerror[name]}</span>
        <TextField id="outlined-basic" name='useremail' label="Email" variant="outlined" className='textfield' InputLabelProps={{ style: { color: "black" } }} onInput={Validation2} />
        <span style={{ color: "red" }}>{emailerror[name2]}</span>
        <TextField id="outlined-basic" type='number' name='userphone' label="Phone Number" variant="outlined" className='textfield' InputLabelProps={{ style: { color: "black" } }} onInput={Validation3} />
        <span style={{ color: 'red' }}>{phoneerror[name3]}</span>
        <TextField id="outlined-basic" name='usermessage' label="Message" variant="outlined" className='textarea' inputProps={{ style: { height: "120px" } }} InputLabelProps={{ style: { color: "black" } }} onInput={Validation4} />
        <span style={{ color: "red" }}>{messageerror[name4]}</span>

        <button style={{ cursor: "pointer" }} className='sendbutton' onClick={() => { Send() }}>Send</button>
      </div>
    </div>

    <div className='contactdiv4'>Our Best Selling items</div>
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
    <br /><br />
    <Section9 />

    <Section10 />
    <Toaster/>
  </>
}
