import {React,useState} from 'react'

export default function Signup(){
    let [formData,setFormData]=useState({email:"",password:"",confirm:""});
    return (
        <div className="bg-[#000000] flex flex-col justify-top items-center min-h-[100vh] w-[100%] h-[100%] m-0% " >
        <div><img alt="" src="./Amaze_ON.png"  height="200" width="200"/></div>
        <div className="bg-[#a8a29e]   flex flex-col items-center w-[300px] h-[310px] rounded-[10px]">   
            <p className=" font-semibold w-[250px] mt-5 mb-0.5">Email</p>
            <div>
              <div>
              <input type="email" className="bg-gray w-[250px] h-[40px] rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none p-2.5 dark:bg-[#d9d9d9]" placeholder='Enter your gmail'  onChange={(e)=>{
                  setFormData({...formData,email : e.target.value})
              }}/>
              </div>
            </div>
            <p className="font-semibold w-[250px] mt-2 mb-0.5">Password</p>
            <div >
              <input className="h-[40px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none w-[250px] p-2.5  dark:bg-[#d9d9d9]  " type="password" placeholder="Password" onChange={(e)=>{
                  setFormData({...formData,password : e.target.value})
                }}/>
            </div>
            <p className="font-semibold w-[250px] mt-2 mb-0.5">Confirm Password</p>
            <div >
              <input className="h-[40px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none w-[250px] p-2.5  dark:bg-[#d9d9d9]  " type="password" placeholder="Password" onChange={(e)=>{
                  setFormData({...formData,confirm : e.target.value})
                }}/>
            </div>
            <div className="mt-2"></div>
            <div style={{marginTop:"10px"}}>
              <input className="w-[250px] bg-[#f97316] hover:bg-[#fb923c] text-white font-bold py-2 px-4 rounded-[5px]" type="submit" value="Create a new Amazon account"/>
            </div>
        </div>
        </div>
    );

}
