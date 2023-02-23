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
