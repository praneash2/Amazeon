import React from 'react'
import cavil from './henry-cavill.jpg'

export default function Navbar() {
  return (
    <div className='bg-gray-800 p-2 flex justify-between'>
        <img className="rounded-[50%]" src={cavil} alt="" width="100px" height="100px"></img>
        <div>
        <input type="text" />
        </div>
        
        <label className="text-white" htmlFor="cart">1</label>
        <img name="cart" 
        src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/null/external-shopping-cart-miscellaneous-kiranshastry-lineal-kiranshastry.png"
        alt=""/>
    </div>
  )
}
