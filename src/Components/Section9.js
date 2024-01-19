import React, { useState } from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'

import { ReactComponent as Facebook } from '../Components/Svgs/Facebook.svg'
import { ReactComponent as Twitter } from '../Components/Svgs/Twitter.svg'
import { ReactComponent as Logo } from '../Components/Svgs/Logo.svg'
import { ReactComponent as Instagram } from '../Components/Svgs/Instagram.svg'
export default function Section9() {

    const [useremail,setUseremail] = useState()
    const [emailerror,setEmailError] = useState()

    const Validation = (event)=>{
        setUseremail(event.target.value)
    }

    const Join = ()=>{

        if(useremail == undefined){
            var newError = "Please Enter Email"
        }
        else if(useremail.includes("@gmail.com")){
            var newError = ""
        }
        else{
            var newError = "Enter Valid Email"
        }

        setEmailError(newError)
    }


    
    return <>
        <div className='section9'>
            <div className='section9div1'>
                <h4>Subscribe to our newsletter</h4>
                <p>Signup for our newsletter to stay up to date on sales and events.</p>
            </div>
            <div className='section9div2'>
                <span className='section9span1'>
                    {emailerror == "" ? <span style={{marginTop:"20px",color:"white",width:"100%"}}>Thankyou for joining our list</span> : <>
                    <input className='input1' type='text' name='useremail' placeholder='Enter Your Email Address' aria-describedby='input' required onInput={Validation}/>
                    <input className='input2' type='submit' value='Join' onClick={()=>{Join()}}/>
                    </>}
                </span>
                <span style={{color:"red"}}>{emailerror}</span>
                <div className='first' style={{paddingLeft:"0px"}}>
                    <span className='span1'><Facebook /></span>
                    <span className='span2'><Twitter /></span>
                    <span className='span3'><Logo /></span>
                    <span className='span4'><Instagram /></span>
                </div>
            </div>
        </div>
    </>
}
