// import React from "react";

//  import { useState,useEffect } from 'react';


// const Form=()=>{
//        const[name,setName]=useState("React");
//    const[show,setshow]=useState(true);

//    const[username,setUsername]=useState("");
//    const[userpassword,setPassword]=useState("");
//    const[errorMsg,setErrorMsg]=useState({
//     username:"",
//     userpassword:"",
//    })
//    const[flag,setflag]=useState(false)




//    useEffect(()=>{
//     console.log("componentdid");
//    },[name]);




//     const handleInputChange=(ev)=>{
//       console.log('ev',ev);



//       if(ev.target.name==="username"){
//         setUsername(ev.target.value);
//         setErrorMsg({
//           username:"",
//           userpassword:errorMsg.password,
//         })
//       }
//       else{
//         setPassword(ev.target.value);
//         setErrorMsg({
//           username:errorMsg.name,
//           userpassword:"",
//         })
//       }



//   }



//     const handlesumbit =(ev)=>{

//       ev.preventDefult();
//       setflag(true)

//       if(username !==""){
//         setErrorMsg({username:"username is requre",userpassword})

//       }return
//       console.log("user",username,userpassword);

//     }

//   return(
//       <div>
//           <form onSubmit={handlesumbit}>
  
//             <input  name="name"  onChange={handleInputChange} placeholder="name"></input>
//             {errorMsg.username ==="" && flag && (<p style={{color:"red"}}>username is requre</p>)}
//             <input  name="password"onChange={handleInputChange} placeholder="password"></input>  
//              {errorMsg.userpassword ==="" && flag && (<p style={{color:"red"}}>userpassword is requre</p>)}
//             <input type="submit"></input>
//           </form>

          
//       </div>
//   );
  
// }
// export default Form;





import React, { useState } from 'react';

const Form = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    let newTask = {
      title: e.target.title.value,
      description: e.target.description.value,
      isPriority: e.target.isPriority.checked,
      isComplete: e.target.isComplete.checked
    };
    setTasks([...tasks, newTask]);
  };

  const onChangeStatus = (e) => {
    let filteredTasks = tasks.filter((task) => {
      if (e.target.name === 'isPriority' && e.target.checked) {
        return task.isPriority;
      } else if (e.target.name === 'isComplete' && e.target.checked) {
        return task.isComplete;
      } else {
        return true;
      }
    });
    setTasks(filteredTasks);
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <label>
          Task Name:
          <input type="text" name="title" />
        </label> <br/>
        <label>
          Description:
          <input name="description" />
        </label> <br/>
        <label>
          Priority:
          <input type="checkbox" name="isPriority" onChange={onChangeStatus} />
        </label> <br/>
        <label>
          Complete:
          <input type="checkbox" name="isComplete" onChange={onChangeStatus} />
        </label> <br/>
        <input type="submit" value="Add Task" />
      </form>
      {tasks.map((task) => (
        <div>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Priority: {task.isPriority ? "Yes" : "No"} </p>
          <p>Complete: {task.isComplete ? "yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
};

export default Form;