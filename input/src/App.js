import React,{useState} from "react"
// import logo from './logo.svg';
// import './App.css';
// import Child from './Child';
// import { useState,useEffect } from 'react';

// const App=()=> {
  
//    const[name,setName]=useState("React");
//    const[show,setshow]=useState(true);

//    const[username,setUsername]=useState("");
//    const[userpassword,setPassword]=useState("");

//    useEffect(()=>{
//     console.log("componentdid");
//    },[name]);




//     const handleInputChange=(ev)=>{
//       console.log('ev',ev);



//       if(ev.target.name==="username"){
//         setUsername(ev.target.value);
//       }
//       else{
//         setPassword(ev.target.value);
//       }



//   }



//     const handlesumbit =(ev)=>{

//       ev.preventDefult();
//       console.log("user",username);

//     }

//   return(
//       <div>
//           <form onSubmit={handlesumbit}>
  
//             <input  name="name"onChange={handleInputChange}></input>
//             <input  name="password"onChange={handleInputChange}></input>  
//             <input type="sumbit"></input>
//           </form>

          
//       </div>
//   );
  
// }

// export default App;



    
const App = () => {

    const [task, setTask] = useState([]);
    const [priorityCheck, setPriority] =useState(false);
    const [completedCheck, setComplete] =useState(false);
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newTask = {
        name: e.target.name.value,
        description: e.target.description.value,
        isPriority: e.target.isPriority.checked,
        isComplete: e.target.isComplete.checked,
      };
  
      setTask([...task, newTask]);
  
      e.target.name.value = "";
      e.target.description.value = "";
      e.target.isPriority.checked = "";
      e.target.isComplete.checked = "";
    };
  
    const handleRemove = (index) => {
      task.splice(index,1);
      setTask([...task]);
    };
  
    const changeFilter = (e) =>{
      if (e.target.name === "isPriority1"){
        setPriority(e.target.checked)
      } else {
        setComplete(e.target.checked)
      }
    }
  
    const priorityUpdate = task.filter((e) =>e.isPriority===true)
  
    const completedUpdate = task.filter((e) =>e.isComplete===true)
  
  
  
    const update = (item, index) =>{
      if (item.target.name === "isPriority" || item.target.name === "isPriority1"){
        task[index].isPriority = item.target.checked;
      }
      else if (item.target.name === "isComplete" || item.target.name === "isComplete1"){
        task[index].isComplete = item.target.checked;
      }
      setTask([...task])
    }
  
    return (
      <div className='container'>
        <div className='row'>
          <form onSubmit={handleSubmit}>
            <h1>Task Name</h1>
            <input type="text" name="name" placeholder="Task Name" className='width' />
            <h1>Task Description</h1>
            <input type="text" name="description" placeholder="Description" className='width' /> <br />
            <input type="checkbox" name="isPriority" /> Is Priority <br/>
            <input type="checkbox" name="isComplete" /> Is Completed <br/><br />
            <button type="submit">Add Task</button>
          </form>
          <div className='filter'>
            <h1>Filter the Task</h1>
              <input type="checkbox" name="isPriority1" onChange={changeFilter}/> {" "}
              Priority <br/> <br />
              <input type="checkbox" name="isComplete1" onChange={changeFilter}/> {" "}
              Completed
          </div>
        </div>
        {priorityCheck == false && completedCheck ==false &&(
        <ul>
          {task.map((task, index) => {
            if (task.name !== "" && task.description !== ""){
              return (
                <li key={index}>
                  <h3>Task Name : {task.name}</h3>
                  <p>Desctiption : {task.description}</p>
                  <p>
                    Is Priority :{" "}
                    {task.isPriority ? (
                      <input type="checkbox" name="isPriority1" defaultChecked onChange={(item) =>update(item, index)}/>
                    ) : (
                      <input type="checkbox" name="isPriority" onChange={(item) =>update(item, index)}/>
                    )}
                  </p>
                  <p>
                    Is Completed :{" "}
                    {task.isComplete ? (
                      <input type="checkbox" name="isComplete1" defaultChecked onChange={(item) =>update(item, index)}/>
                    ) : (
                      <input type="checkbox" name="isComplete" onChange={(item) =>update(item, index)}/>
                    )}
                  </p>
                  <button
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                </li>
              );
            }
          })}
        </ul>)}
        {priorityCheck == true && (
        <ul>
          {priorityUpdate.map((task, index) => {
            if (task.name !== "" && task.description !== ""){
              return (
                <li key={index}>
                  <h3>Task Name : {task.name}</h3>
                  <p>Desctiption : {task.description}</p>
                  <p>
                    Is Priority :{" "}
                    {task.isPriority ? (
                      <input type="checkbox" name="isPriority1" defaultChecked onChange={(item) =>update(item, index)}/>
                    ) : (
                      <input type="checkbox" name="isPriority" onClick={(item) =>update(item, index)}/>
                    )}
                  </p>
                  <p>
                    Is Completed :{" "}
                    {task.isComplete ? (
                      <input type="checkbox" name="isComplete1" defaultChecked onChange={(item) =>update(item, index)}/>
                    ) : (
                      <input type="checkbox" name="isComplete"  onClick={(item) =>update(item, index)}/>
                    )}
                  </p>
                  <button
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                </li>
              );
            }
          })}
        </ul>)}
        {completedCheck ==true &&(
        <ul>
          {completedUpdate.map((task, index) => {
            if (task.name !== "" && task.description !== ""){
              return (
                <li key={index}>
                  <h3>Task Name : {task.name}</h3>
                  <p>Desctiption : {task.description}</p>
                  <p>
                    Is Priority :{" "}
                    {task.isPriority ? (
                      <input type="checkbox" name="isPriority1" defaultChecked onChange={(item) =>update(item, index)}/>
                    ) : (
                      <input type="checkbox" name="isPriority" onClick={(item) =>update(item, index)}/>
                    )}
                  </p>
                  <p>
                    Is Completed :{" "}
                    {task.isComplete ? (
                      <input type="checkbox" name="isComplete1" defaultChecked onChange={(item) =>update(item, index)}/>
                    ) : (
                      <input type="checkbox" name="isComplete"  onClick={(item) =>update(item, index)}/>
                    )}
                  </p>
                  <button
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                </li>
              );
            }
          })}
        </ul>)}
      </div>
    );
  };
  
  export default App;
  






