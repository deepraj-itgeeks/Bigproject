import React from 'react'
import Products from'./Products.json'
import '../Components/AnnouncementBar/AnnouncementBar.css'
export default function Section8() {
    return <>
        <div className='section8'>
          {Products.map((items,index)=>{
            return<>
              {index === 0 ? items.images1.map((data)=>{
                return<>
                  <div className='section8div'>
                     <img src={data.image} style={{height:"100%",width:"100%"}}/>
                  </div>
                </>
              }):null}
            </>
          })}
        </div>
    </>
}
