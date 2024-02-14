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
import axios from 'axios'
import { json } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
export default function Account() {
    const [name, setName] = useState()
    const [name2, setName2] = useState()
    const [name3, setName3] = useState()

    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [emailname, setEmailName] = useState()
    const [passwordname, setPasswordName] = useState()

    const [email, setUseremail] = useState([])
    const [useremail2, setUseremail2] = useState([])
    const [userpassword, setUserpassword] = useState([])

    const [firstvalue, setFirstValue] = useState([])
    const [lastvalue, setLastValue] = useState([])
    const [emailvalue, setEmailValue] = useState([])
    const [passwordvalue, setPasswordValue] = useState([])

    const [emailError, setemailError] = useState({})
    const [emailError2, setemailError2] = useState({})
    const [passwordError, setpasswordError] = useState({})

    const [resetemailname,setResetEmailName] = useState()
    const [resetemailvalue,setResetEmailValue] = useState([])
    const [resetemailerror,setResetEmailError] = useState({})

    const [resetotpname,setResetOtpName] = useState()
    const [resetotpvalue,setResetOtpValue] = useState([])
    const [resetotperror,setResetOtpError] = useState({})

    const [resetpasswordname,setResetPasswordName] = useState()
    const [resetpasswordvalue,setResetPasswordValue] = useState([])
    const [resetpassworderror,setResetPasswordError] = useState({})
    
    const [resetconfirmpassname,setResetConfirmPassName] = useState()
    const [resetconfirmpassvalue,setResetConfirmPassValue] = useState([])
    const [resetconfirmpasserror,setResetConfirmPassError] = useState({}) 

    const [formdata, setFormData] = useState([])
    const [createaccount, setCreateAccount] = useState([])

    const [checkemail, setCheckemail] = useState()

    const [resetpassword, setResetPassword] = useState()

    const [modal3, setModal3] = useState()
    const [Enable, setEnable] = useState(false)
    const [Enable2, setEnable2] = useState(false)
    const [Enable3, setEnable3] = useState(false)

    const [firstnameerror, setFirstNameError] = useState({})
    const [lastnameerror, setLastNameError] = useState({})
    const [emailerror, setEmailError] = useState({})
    const [passworderror, setPasswordError] = useState({})

    const { Data, Data2 } = useSelector((store) => store.masterData)

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

    const CloseModal1 = ()=>{
        setResetPassword(false)
        setModal3(true)
    }

    const Signin = () => {
        setFormData((formdata) => ({ ...formdata, email, userpassword }))
        setEnable(true)
        toast.success("Your Sign Up Successfully Completed.")
    }

    useEffect(() => {
        dispatch(ContainData(formdata))
    }, [formdata])


    const Submit = async () => {
        const newData = Data.filter((item) => { if (item.payload.useremail == useremail2) { return item } })
        const valid = newData.length === 0;
        setCheckemail(valid)
        setResetPassword(true)
        setModal3(false)

        toast.success("Email Successfully Matched")

        const api = await fetch("http://localhost:5000/forgot-password",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email})
        })

        const response = await api.json()
        console.log(response)

    }

    function myFunction() {
        var x = document.getElementById("userpassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    function myFunction1(){
        var x = document.getElementById("userpassword1");
        if(x.type === "password"){
            x.type = "text";
        }
        else{
            x.type = "password"
        }
    }

    function myFunction2(){
        var x = document.getElementById("userconfirmpassword");
        if(x.type === "password"){
            x.type = "text";
        }
        else{
            x.type = "password"
        }
    }

    


    const CreateAccount = () => {
        setEnable2(true)

    }


    const FirstNameValidation = (event) => {
        var name = event.target.name;
        setFirstName(name)
        var value = event.target.value;
        var newError = { ...firstnameerror }
        if (value == "" || value == null) {
            newError[name] = "Please Enter First Name"
        }
        else {
            newError[name] = ""
        }
        setFirstNameError(newError)
        setFirstValue(value)
    }

    const LastNameValidation = (event) => {
        var name = event.target.name;
        setLastName(name)
        var value = event.target.value;
        var newError = { ...lastnameerror }
        if (value == "" || value == null) {
            newError[name] = "Please Enter Last Name"
        }
        else {
            newError[name] = ""
        }
        setLastNameError(newError)
        setLastValue(value)
    }

    const EmailValidation = (event) => {
        var name = event.target.name;
        setEmailName(name)
        var value = event.target.value;
        var newError = { ...emailerror }
        if (value == "" || value == null) {
            newError[name] = "Please Enter Email"
        }
        else {
            newError[name] = ""
        }
        setEmailError(newError)
        setEmailValue(value)
    }

    const ResetEmailValidation = (event)=>{
         var name = event.target.name;
         setResetEmailName(name)
         var value = event.target.value;
         var newError = {...resetemailerror}
         if(value == "" || value == null){
            newError[name] = "Please Enter Email"
         }
         else if(value.includes("@gmail.com") || value === useremail2){
            newError[name] = ""
         }
         else{
            newError[name] = "Enter Valid Email"
         }

         setResetEmailError(newError)
         setResetEmailValue(value)

    }

    const PasswordValidation = (event) => {
        var name = event.target.name;
        setPasswordName(name)
        var value = event.target.value;
        var newError = { ...passworderror }
        if (value == "" || value == null) {
            newError[name] = "Please Enter Password"
        }
        else {
            newError[name] = ""
        }
        setPasswordError(newError)
        setPasswordValue(value)
    }

    const OtpValidation = (event)=>{
        var name = event.target.name;
        setResetOtpName(name)
        var value = event.target.value;
        var newError = {...resetotperror}
        if(value == "" || value == null){
            newError[name] = "Please Enter OTP"
        }
        else{
            newError[name] = ""
        }

        setResetOtpError(newError)
        setResetOtpValue(value)
    }

    const PassValidation = (event)=>{
        var name = event.target.name;
        setResetPasswordName(name)
        var value = event.target.value;
        var newError = {...resetpassworderror}
        if(value == "" || value == null){
            newError[name] = "Please Enter Password"
        }
        else{
            newError[name] = ""
        }

        setResetPasswordError(newError)
        setResetPasswordValue(value)
    }

    const ConfirmPassValidation = (event)=>{
        var name = event.target.name
        setResetConfirmPassName(name)
        var value = event.target.value;
        var newError = {...resetconfirmpasserror}
        if(value == "" || value == null){
            newError[name] = "Please Enter Confirm Password"
        }
        else if(resetpasswordvalue === value){
            newError[name] = ""
        }
        else if(resetpasswordvalue != value){
            newError[name] = "Password doest not Matched"
        }
        else{
            newError[name] = ""
        }
        setResetConfirmPassError(newError)
        setResetConfirmPassValue(value)
    }

    const GOToLogin = async ()=>{
        setModal3(false)
        setResetPassword(false)
        toast.success("Password Reset Successfully")
        const api = await fetch("http://localhost:5000/reset-password",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email})
        })

        const response = await api.json()
        console.log(response)
    }

    const Create = () => {
        setCreateAccount((createaccount) => ({ ...createaccount, firstvalue, lastvalue, emailvalue, passwordvalue }))
        toast.success("Your Account Successfully Created")
    }

    useEffect(() => {
        dispatch2(ContainData2(createaccount))
    }, [createaccount])

    return <>
        <TopAnnouncementBar />

        <Navbar />
        {/* {Enable == true ? <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong>  Your Sign Up Successfully Completed.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div> : null} */}

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
                {email == "" || userpassword == "" ? <button className='signin' disabled={true} style={{ backgroundColor: "gray", cursor: "pointer" }} onClick={() => { Signin() }}>Sign In</button> : <button className='signin' disabled={false} onClick={() => { Signin() }}>Sign In</button>}
                <Toaster/>
                <span className='orspan'>
                    <span className='orleft'></span><span className='orinner'>Or</span><span className='orright'></span>
                </span>
                <button className='create' onClick={() => { CreateAccount() }}>Create Account</button>
            </div>
        </div>

        <Section9 />

        <Section10 />

        <Modal isOpen={modal3} isClose={modal3}>
            {/* {checkemail === false ? <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>success!</strong> Email Successfully Matched.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> : checkemail === true ? <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Wrong!</strong> Email Not Found.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> : null} */}
            <div className='modalthirddiv1'>
                <Cross style={{ cursor: "pointer" }} onClick={CloseModal} />
            </div>

            <div className='modalthirddiv2'>
                <span className='modalthirdspan1'>Reset your password</span>
                <p>We will sent you an email to reset your password.</p>
                <span className='emailspan'>
                    <label className='emaillable'>Email</label>
                    <input type='email' name='email' id='useremail' className='Useremail' style={{ width: "95%" }} onInput={Validate3} />
                    <span style={{ color: "red" }}>{emailError2[name3]}</span>
                </span>
                {useremail2 == "" || useremail2 == null || email !== useremail2? <button disabled={true} style={{backgroundColor:"gray"}} className='modalthirdsubmitbutton' onClick={() => { Submit() }}>Submit</button> : <button disabled={false} className='modalthirdsubmitbutton' onClick={() => { Submit() }}>Submit</button>}
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
                    <input type='text' name='firstname' className='firstinput' onInput={FirstNameValidation} />
                    <span style={{ color: "red" }}>{firstnameerror[firstname]}</span>
                </span>

                <span className='modalfourspan3'>
                    <label className='modalfourlable2'>Last Name</label>
                    <input type='text' name='lastname' className='lastinput' onInput={LastNameValidation} />
                    <span style={{ color: 'red' }}>{lastnameerror[lastname]}</span>
                </span>

                <span className='modalfourspan4'>
                    <label className='modalfourlable3'>Email</label>
                    <input type='email' name='email' className='emailinput' onInput={EmailValidation} />
                    <span style={{ color: "red" }}>{emailerror[emailname]}</span>
                </span>

                <span className='modalfourspan5'>
                    <label className='modalfourlable4'>Password</label>
                    <input type='password' name='password' className='passwordinput' onInput={PasswordValidation} />
                    <span style={{ color: "red" }}>{passworderror[passwordname]}</span>
                </span>

                {firstvalue == "" || lastvalue == "" || emailvalue == "" || passwordvalue == "" ? <button disabled={true} style={{ backgroundColor: "gray", cursor: "pointer" }} className='Createbutton'>Create</button> : <button disabled={false} style={{ cursor: "pointer" }} className='Createbutton' onClick={() => { Create() }}>Create</button>}
                <Toaster/>
            </div>
        </Modal>

        <Modal isOpen={resetpassword}>
            <div className='resetparentdiv'>
                <div className='resetdiv'>
                    <Cross style={{ cursor: "pointer" }} onClick={CloseModal1} />
                </div>

                <div className='resetdiv1'>
                    <label className='emaillable'>Email</label>
                    <input type='email' name='useremail' id='useremail' className='Useremail' style={{ width: "100%" }} onInput={ResetEmailValidation}/>
                    <span style={{ color: "red" }}>{resetemailerror[resetemailname]}</span>
                </div>

                <div className='resetdiv2'>
                    <label className='otp'>OTP</label>
                    <input type='text' name='userotp' id='userotp' className='Userotp' style={{ width: "100%" }} onInput={OtpValidation}/>
                    <span style={{color:"red"}}>{resetotperror[resetotpname]}</span>
                </div>

                <div className='resetdiv3'>
                    <label className='password'>Password</label>
                    <input type='password' name='userpassword' id='userpassword1' className='Userpassword' style={{ width: "100%" }} onInput={PassValidation}/>
                    <span style={{color:"red"}}>{resetpassworderror[resetpasswordname]}</span>
                    <span style={{ display: "flex", gap: "10px" }}><input type="checkbox" onClick={() => { myFunction1() }} />Show Password </span>
                </div>

                <div className='resetdiv4'>
                    <label className='confirmpassword'>Confirm Password</label>
                    <input type='password' name='userconfirmpassword' id='userconfirmpassword' className='Userconfirmpassword' style={{ width: "100%" }} onInput={ConfirmPassValidation}/>
                    <span style={{color:"red"}}>{resetconfirmpasserror[resetconfirmpassname]}</span>
                    <span style={{ display: "flex", gap: "10px" }}><input type="checkbox" onClick={() => { myFunction2() }} />Show Password </span>
                </div>

                <div className='resetdiv5'>
                    {resetemailvalue == "" || resetemailvalue == null || resetotpvalue == "" || resetotpvalue == null || resetpasswordvalue == "" || resetpasswordvalue == null || resetconfirmpassvalue == "" || resetconfirmpassvalue == null || resetpasswordvalue != resetconfirmpassvalue? <button disabled={true} style={{backgroundColor:"gray"}} className='submit'>Submit</button> : <button className='submit' onClick={GOToLogin}>Submit</button>}
                    <Toaster/>
                </div>
            </div>
        </Modal>
    </>
}
