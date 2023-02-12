import React from 'react'

export default function Password(props){
    
    
    return (<div >
        <input className={props.my_style} type="password" placeholder="Password" onChange={(e)=>{
            props.update(e.target.value)
        }
        }/>
        </div>
    );
}