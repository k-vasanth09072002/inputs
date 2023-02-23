import React from "react";

 import { useState,useEffect } from 'react';


const Form=()=>{
       const[name,setName]=useState("React");
   const[show,setshow]=useState(true);

   const[username,setUsername]=useState("");
   const[userpassword,setPassword]=useState("");
   const[errorMsg,setErrorMsg]=useState({
    username:"",
    userpassword:"",
   })
   const[flag,setflag]=useState(false)




   useEffect(()=>{
    console.log("componentdid");
   },[name]);




    const handleInputChange=(ev)=>{
      console.log('ev',ev);



      if(ev.target.name==="username"){
        setUsername(ev.target.value);
        setErrorMsg({
          username:"",
          userpassword:errorMsg.password,
        })
      }
      else{
        setPassword(ev.target.value);
        setErrorMsg({
          username:errorMsg.name,
          userpassword:"",
        })
      }



  }



    const handlesumbit =(ev)=>{

      ev.preventDefult();
      setflag(true)

      if(username !==""){
        setErrorMsg({username:"username is requre",userpassword})

      }return
      console.log("user",username,userpassword);

    }

  return(
      <div>
          <form onSubmit={handlesumbit}>
  
            <input  name="name"  onChange={handleInputChange} placeholder="name"></input>
            {errorMsg.username ==="" && flag && (<p style={{color:"red"}}>username is requre</p>)}
            <input  name="password"onChange={handleInputChange} placeholder="password"></input>  
             {errorMsg.userpassword ==="" && flag && (<p style={{color:"red"}}>userpassword is requre</p>)}
            <input type="submit"></input>
          </form>

          
      </div>
  );
  
}
export default Form;