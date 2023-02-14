import React,{useState} from 'react'

export default function Contact() {
    let [list,setlist]=useState([]);
    let [input,setinput]=useState("");
    let [get_email,set_email]=useState("");
    function add_data(){
        if (get_email && input){
        const new_data={
            id:get_email,
            content:input};
        console.log(input);
        setlist([...list,new_data]);
        console.log(new_data);
        setinput("");
        set_email("");
        }
        else{
            alert("all input fields are required");
        }
    }
    function delete_data(id){
        const newlist=list.filter((input)=>
            input.id!==id);
        setlist(newlist);
    }

  return (<>
    <div className="flex flex-col justify-center min-h-[100vh] w-[100%] h-[100%] m-0% items-center bg-[#000000]">
        <div>
        <div ><h1 className='font-bold text-[21px]  text-[white]'>You can post your queries here</h1></div>
        
            
        <div className='mt-5 mb-2'><label className=' text-[white] '>Enter email  </label></div>
        <div><input className="bg-gray w-[250px] h-[40px] rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none p-2.5 dark:bg-[#d9d9d9]" type="email" id="email" value={get_email} onChange={(e)=> set_email(e.target.value)}/></div>

        <div className='mt-5 mb-2'> <label className='mt-5 text-[white] ' >Enter your query</label> </div>
        <div> <textarea className="bg-gray w-[250px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none p-2.5 dark:bg-[#d9d9d9]" type="text" id="query" value={input} onChange={(e)=> setinput(e.target.value)}/>    </div>
        
        <div><input className="w-[250px] bg-[#f97316] hover:bg-[#fb923c] text-white font-bold py-2 px-4 rounded-[5px] mt-5 text-[white]" type="submit" onClick={add_data}/></div>
        <div>
        <ul>
            {list.map((input)=>(
                    <div className="bg-gray mt-10 w-[250px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none p-2.5 dark:bg-[#d9d9d9]"key={input.id}>
                    <div>{input.id}</div>
                    <div className="p-5">{input.content}</div>
                        
                        
                    <button onClick={()=>delete_data(input.id) }>&times;</button>
                    </div>)
                    
                )}
                </ul>
                
            </div> 
        </div>
        
        
    </div>
    
    </>
    
  )
}
