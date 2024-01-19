import React, { useEffect, useState } from 'react'
import TopAnnouncementBar from './TopAnnouncementBar'
import Navbar from './Navbar'
import Section9 from '../Section9'
import Section10 from '../Section10'
import '../AnnouncementBar/Account.css'
// import Modal from '../AnnouncementBar/Modul3'
import Modal from '../AnnouncementBar/Modal4'
import { ReactComponent as Cross } from '../Svgs/Cross.svg'
import { useDispatch, useSelector } from 'react-redux'
import store from '../Redux/Store'
import { ContainData, ContainData2 } from '../Redux/MasterSlice'
import usePagination from '@mui/material/usePagination/usePagination'
import { compose } from '@reduxjs/toolkit'
export default function Account() {
    const [name, setName] = useState()
    const [name2, setName2] = useState()
    const [name3, setName3] = useState()

    const [firstname,setFirstName] = useState()
    const [lastname,setLastName] = useState()
    const [emailname,setEmailName] = useState()
    const [passwordname,setPasswordName] = useState()

    const [useremail, setUseremail] = useState([])
    const [useremail2, setUseremail2] = useState([])
    const [userpassword, setUserpassword] = useState([])

    const [firstvalue,setFirstValue] = useState([])
    const [lastvalue,setLastValue] = useState([])
    const [emailvalue,setEmailValue] = useState([])
    const [passwordvalue,setPasswordValue] = useState([])

    const [emailError, setemailError] = useState({})
    const [emailError2, setemailError2] = useState({})
    const [passwordError, setpasswordError] = useState({})

    const [formdata, setFormData] = useState([])
    const [createaccount,setCreateAccount] = useState([])

    const [checkemail, setCheckemail] = useState()

    const [modal3, setModal3] = useState()
    const [Enable, setEnable] = useState(false)
    const [Enable2, setEnable2] = useState(false)
    const [Enable3,setEnable3] = useState(false)

    const [firstnameerror,setFirstNameError] = useState({})
    const [lastnameerror,setLastNameError] = useState({})
    const [emailerror,setEmailError] = useState({})
    const [passworderror,setPasswordError] = useState({})

    const { Data,Data2 } = useSelector((store) => store.masterData)

    const dispatch = useDispatch([])
    const dispatch2 = useDispatch([])

    const Validate1 = (event) => {
        var name = event.target.name;
        setName(name)
        var value = event.target.value;
        var newError = { ...emailError }
        if (value == "" || value == null) {
            newError[name] = "Please Enter Email"
        } else if (value.includes("@gmail.com")) {
            newError[name] = ""
        }
        else {
            newError[name] = "Enter Valid Email"
        }

        setemailError(newError)
        setUseremail(value)


    }


    const Validate2 = (event) => {
        var name = event.target.name;
        setName2(name)
        var value = event.target.value;
        var newError = { ...passwordError }
        if (value == "" || value == null) {
            newError[name] = "Please Enter Password"
        }
        else {
            newError[name] = ""
        }

        setpasswordError(newError)
        setUserpassword(value)
    }

    const Validate3 = (event) => {
        var name = event.target.name;
        setName3(name)
        var value = event.target.value;
        var newError = { ...emailError2 }
        if (value == "" || value == null) {
            newError[name] = "Please Enter Email"
        } else if (value.includes("@gmail.com")) {
            newError[name] = ""
        }
        else {
            newError[name] = "Enter Valid Email"
        }

        setemailError2(newError)
        setUseremail2(value)
    }

    const OpenModal = () => {
        setModal3(true)
    }

    const CloseModal = () => {
        setModal3(false)
        setEnable2(false)
    }


    const Signin = () => {
        setFormData((formdata) => ({ ...formdata, useremail, userpassword }))
        setEnable(true)
    }

    useEffect(() => {
        dispatch(ContainData(formdata))
    }, [formdata])


    const Submit = () => {
        const newData = Data.filter((item) => { if (item.payload.useremail == useremail2) { return item } })
        const valid = newData.length === 0;
        setCheckemail(valid)
    }

    function myFunction() {
        var x = document.getElementById("userpassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }


    const CreateAccount = () => {
        setEnable2(true)

    }


    const FirstNameValidation =(event)=>{
        var name = event.target.name;
        setFirstName(name)
        var value = event.target.value;
        var newError = {...firstnameerror}
        if(value == "" || value == null){
            newError[name] = "Please Enter First Name"
        }
        else{
            newError[name] = ""
        }
        setFirstNameError(newError)
        setFirstValue(value)
    }

    const LastNameValidation = (event)=>{
        var name = event.target.name;
        setLastName(name)
        var value = event.target.value;
        var newError = {...lastnameerror}
        if(value == "" || value == null){
            newError[name] = "Please Enter Last Name"
        } 
        else{
            newError[name] = ""
        }
        setLastNameError(newError)
        setLastValue(value)
    }

    const EmailValidation = (event)=>{
        var name = event.target.name;
        setEmailName(name)
        var value = event.target.value;
        var newError = {...emailerror}
        if(value == "" || value  == null){
            newError[name] = "Please Enter Email"
        }
        else{
            newError[name] = ""
        }
        setEmailError(newError)
        setEmailValue(value)
    }

    const PasswordValidation = (event)=>{
        var name = event.target.name;
        setPasswordName(name)
        var value = event.target.value;
        var newError = {...passworderror}
        if(value == "" || value == null){
            newError[name] = "Please Enter Password"
        }
        else{
            newError[name] = ""
        }
        setPasswordError(newError)
        setPasswordValue(value)
    }

    const Create = ()=>{
        setCreateAccount((createaccount)=>({...createaccount,firstvalue,lastvalue,emailvalue,passwordvalue}))
        alert(" Your Account Successfully Created")
    }

    useEffect(() => {
        dispatch2(ContainData2(createaccount))
    }, [createaccount])

    console.log(Data2)
    return <>
        <TopAnnouncementBar />

        <Navbar />
        {Enable == true ? <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong>  Your Sign Up Successfully Completed.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div> : null}

        <div className='accountdiv1'>
            <div className='accountdivinner'>
                <span className='login'>Login</span>
                <span className='emailspan'>
                    <label className='emaillable'>Email</label>
                    <input type='email' name='useremail' id='useremail' className='Useremail' onInput={Validate1} />
                    <span style={{ color: "red" }}>{emailError[name]}</span>
                </span>
                <span className='passwordspan'>
                    <span className='passwordspan1'><label className='passwordlable'>Password</label> <span onClick={OpenModal} style={{ cursor: "pointer" }}><u>Forgot your password?</u></span></span>
                    <input type='password' name='userpassword' id='userpassword' className='Userpassword' onInput={Validate2} />
                    <span style={{ color: "red" }}>{passwordError[name2]}</span>
                    <span style={{ display: "flex", gap: "10px" }}><input type="checkbox" onClick={() => { myFunction() }} />Show Password </span>
                </span>
                {useremail == "" || userpassword == "" ? <button className='signin' disabled={true} style={{ backgroundColor: "gray", cursor: "pointer" }} onClick={() => { Signin() }}>Sign In</button> : <button className='signin' disabled={false} onClick={() => { Signin() }}>Sign In</button>}
                <span className='orspan'>
                    <span className='orleft'></span><span className='orinner'>Or</span><span className='orright'></span>
                </span>
                <button className='create' onClick={()=>{CreateAccount()}}>Create Account</button>
            </div>
        </div>

        <Section9 />

        <Section10 />

        <Modal isOpen={modal3} isClose={modal3}>
            {checkemail === false ? <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>success!</strong> Email Successfully Matched.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> : checkemail === true ? <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Wrong!</strong> Email Not Found.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> : null}
            <div className='modalthirddiv1'>
                <Cross style={{ cursor: "pointer" }} onClick={CloseModal} />
            </div>

            <div className='modalthirddiv2'>
                <span className='modalthirdspan1'>Reset your password</span>
                <p>We will sent you an email to reset your password.</p>
                <span className='emailspan'>
                    <label className='emaillable'>Email</label>
                    <input type='email' name='useremail' id='useremail' className='Useremail' style={{ width: "95%" }} onInput={Validate3} />
                    <span style={{ color: "red" }}>{emailError2[name3]}</span>
                </span>
                <button className='modalthirdsubmitbutton' onClick={() => { Submit() }}>Submit</button>
            </div>
        </Modal>

        <Modal isOpen={Enable2}>

            <div className='modalfourdiv1'>
                <Cross style={{ cursor: "pointer" }} onClick={CloseModal} />
            </div>

            <div className='modalfourdiv2'>
                <span className='modalfourspan1'>Create Account</span>

                <span className='modalfourspan2'>
                    <label className='modalfourlable1'>First Name</label>
                    <input type='text' name='firstname' className='firstinput' onInput={FirstNameValidation}/>
                    <span style={{ color: "red" }}>{firstnameerror[firstname]}</span>
                </span>

                <span className='modalfourspan3'>
                    <label className='modalfourlable2'>Last Name</label>
                    <input type='text' name='lastname' className='lastinput' onInput={LastNameValidation}/>
                    <span style={{color:'red'}}>{lastnameerror[lastname]}</span>
                </span>

                <span className='modalfourspan4'>
                    <label className='modalfourlable3'>Email</label>
                    <input type='email' name='email' className='emailinput' onInput={EmailValidation}/>
                    <span style={{color:"red"}}>{emailerror[emailname]}</span>
                </span>

                <span className='modalfourspan5'>
                    <label className='modalfourlable4'>Password</label>
                    <input type='password' name='password' className='passwordinput' onInput={PasswordValidation}/>
                    <span style={{color:"red"}}>{passworderror[passwordname]}</span>
                </span>

                {firstvalue == "" || lastvalue == "" || emailvalue == "" || passwordvalue == "" ? <button disabled={true}  style={{backgroundColor:"gray",cursor:"pointer"}} className='Createbutton'>Create</button> : <button disabled={false} style={{cursor:"pointer"}} className='Createbutton' onClick={()=>{Create()}}>Create</button> }
            </div>
        </Modal>
    </>
}
