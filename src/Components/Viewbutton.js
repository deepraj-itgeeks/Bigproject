import React from 'react'
import '../Components/AnnouncementBar/AnnouncementBar.css'
import { useNavigate } from 'react-router-dom'
export default function Viewbutton() {
  const navigate = useNavigate()
  const ViewAll = ()=>{
      navigate("ArrivalsComponent2")
  }
  return <>
      <div className='view'>
            <button className='viewbutton' onClick={()=>{ViewAll()}}>View all</button>
        </div>
   </>
}
