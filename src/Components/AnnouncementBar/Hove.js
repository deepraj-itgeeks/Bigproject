import React from 'react'

export default function Hove() {
    return <>
        <div className='Hoverdiv'>
            <div className='Hoverdiv1'></div>
            <div className='Hoverdiv2'>
                <li style={{ fontWeight: "bold" }}>By Type</li>
                <li>Dresses</li>
                <li>Playsuits</li>
                <li>Bottoms</li>
                <li>Tops</li>
            </div>
            <div className='Hoverdiv3'>
                <li style={{ fontWeight: "bold" }}>By Collection</li>
                <li>New Arrivals</li>
                <li>Best Selling</li>
                <li>Our favorites</li>
            </div>
        </div>
    </>
}
