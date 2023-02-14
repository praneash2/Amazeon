import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    let hoverAnimation = `py-11 px-1 hover:border-b-cyan-600 hover:border-b-2 duration-200 h-full`
  return (<>
    <div name="Navbar main" className="min-h-[15vh] max-h-[15vh] bg-[#131a35] flex justify-between items-center sticky top-0 z-10 border-b-cyan-600 border-b-2">
        <div className='max-w-[15vh]'>
        <Link to="/">
            <img src="./Amaze_ON.png" alt="" className='max-h-full max-w-full'/>
        </Link>
        </div>
        <div className='text-white font-light absolute ml-[10vw]'>
            Logged In as,
            <div>Siddhu Jaykay</div>
        </div>
        <div className={`text-white relative font-bold cursor-pointer hover:scale-105 duration-200 ${hoverAnimation}`}><Link to="/">Products</Link></div>
        <div className={`text-white font-bold cursor-pointer hover:scale-105 duration-200 ${hoverAnimation}`}>Contact</div>
        <div className={`text-white font-bold cursor-pointer hover:scale-105 duration-200 ${hoverAnimation}`}>About</div>
        <div className={`text-red-600 font-bold cursor-pointer hover:scale-105 duration-200 ${hoverAnimation}`}>Logout</div>
        <div className='image-cropper rounded-full mx-5 w-[10vh] h-[10vh]'>
            <img src="./henry-cavill.jpg" alt="" className='rounded-full w-full h-full'/>
        </div>
    </div>
    </>)
}
