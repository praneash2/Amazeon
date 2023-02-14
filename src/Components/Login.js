import {React,useState} from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import {useHistory} from 'react-router-dom'

export default function Login() {
  const toast = useToast()
  let [formData,setFormData]=useState({email:"",password:""});

  async function submitHandler(user){
    try{
      const {data} = await axios.post('http://localhost:7000/login', user)
      if(data.data){
        toast({
          title:`${data.data}`,
          isClosable:true,
          status:'warning',
          duration: 3000
        })
        return
      }
      else{
        toast({
          title:'User Logged in successfully',
          isClosable: true,
          status:'success',
          duration: 3000
        })
        const {name, email, password, picture} = data
        localStorage.setItem('user', JSON.stringify({name, email, password, picture}))
        console.log(JSON.parse(localStorage.getItem('user')))
      }
    }
    catch(err){
      console.log(err.message)
    }
  }

  return (
    <>
    <div className="bg-[#000000] flex flex-col justify-top items-center min-h-[100vh] w-[100%] h-[100%] m-0% "> 
      <div><img alt="" src="./Amaze_ON.png"  height="200" width="200"/></div>
      <div className="bg-[#a8a29e]   flex flex-col items-center w-[300px] h-[380px] rounded-[10px]"> 
      <p className="font-bold text-[24px] w-[250px] mt-5 mb-2  ">Sign in</p>
      <p className=" font-semibold w-[250px]  mb-0.5">Email</p>
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
  
      <div style={{display:"flex",width:"250px",marginTop:"10px" }}>
        <input className="dark:bg-[#d9d9d9]" type="checkbox"/>
        <div className="font-semibold ml-[3px]" >Keep me signed in</div> 
      </div>

      <div style={{marginTop:"10px"}}>
        <button className="w-[250px] bg-[#f97316] hover:bg-[#fb923c] text-white font-bold py-2 px-4 rounded-[5px]" onClick={()=>{submitHandler(formData)}}>SignIn</button>
        
      </div>
      <div>
        <p className="font-semibold mt-[10px] mb-[-8px] mr-[10px] text-[14px] " >New to Amaze-On?</p>
      </div>
  
    <div style={{marginTop:"10px"}}>
      <Link to="/signup">
        <input className="w-[250px] bg-[#f97316] hover:bg-[#fb923c] text-white font-bold py-2 px-4 rounded-[5px]" type="submit" value="Create a new Amazon account"/>
      </Link>
    </div>
  </div>
  </div>  
  </>)
  
}

