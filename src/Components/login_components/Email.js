import React from 'react'

export default function Email(props){
    
    return (
        <div >
        <div  >
        <input type="email" className={props.my_style} placeholder='Enter your gmail'  onChange={(e)=>{
            props.update(e.target.value)
            
        }}/>
        </div>
        </div>
    );
}
