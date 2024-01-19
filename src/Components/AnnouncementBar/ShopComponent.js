import React from 'react'
import TopAnnouncementBar from './TopAnnouncementBar'
import Navbar from './Navbar';
import '../AnnouncementBar/ShopComponent.css'
import Products from '../Products.json'
import Section9 from '../Section9'
import Section10 from '../Section10'
export default function ShopComponent() {
  return <>
    <TopAnnouncementBar />

    <Navbar />

    <div className='firstdiv'>
      <h2>Collection</h2>
    </div>

    <div className='seconddiv'>
      {Products.map((items, index) => {
        return <>
          {index === 0 ? items.image2.map((data) => {
            return <>
              <div className='mostinnerdiv'>
                <div className='secondinnerdiv'>
                  <img src={data.image} style={{ height: "100%", width: "100%" }} />
                </div>
                <div className='secondinnerdiv2'>
                  <b>{data.item1}</b>
                  {data.item2}
                </div>
              </div>
            </>
          }) : null}
        </>
      })}
    </div>

    <div className='thirddiv'>
      Showing items 1-8 of 8.
    </div>

    <Section9/>

    <Section10/>

  </>
}
