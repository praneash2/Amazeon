import {React,useState} from 'react'
import Password from './login_components/Password';
import Submit from './login_components/Submit';
import Email from './login_components/Email';

function Create_new(){
    let email={"email":""};
    let password={"password":""};
    let confirm_password={"password":""};
    
    let [get_email,set_email]=useState(email);
    let [get_password,set_password]=useState(password);
    let [get_confirm_password,set_confirm_password]=useState(confirm_password);
    function submitted(){
        console.log(get_email,get_password,get_confirm_password);
    }

    return (
        <div className="bg-[#000000] flex flex-col justify-top items-center min-h-[100vh] w-[100%] h-[100%] m-0% " >
        <div><img src="https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg"  height="200" width="200"/></div>
        <div className="bg-[#a8a29e]   flex flex-col items-center w-[300px] h-[310px] rounded-[10px]">   
            <p className=" font-semibold w-[250px] mt-5 mb-0.5">Email</p>
            <Email my_style={"bg-gray w-[250px] h-[40px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none p-2.5 dark:bg-[#d9d9d9]"} update={set_email}  />
            <p className="font-semibold w-[250px] mt-2 mb-0.5">Password</p>
            <Password  my_style={"h-[40px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none w-[250px] p-2.5  dark:bg-[#d9d9d9]  "} update={set_password}/> 
            <p className="font-semibold w-[250px] mt-2 mb-0.5">Confirm Password</p>
            <Password  my_style={" h-[40px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none w-[250px] p-2.5  dark:bg-[#d9d9d9] "} update={set_confirm_password} /> 
            <div className="mt-2"></div>
            <Submit  thing={"Sign up"} onclk={submitted} />
        </div>
        </div>
    );

}

export default Create_new;