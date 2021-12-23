import { useState } from "react";

function App(){
  const [toDo,setToDO]=useState("");
  const [toDos,setToDos]=useState([]);
  const onChange=(event)=>setToDO(event.target.value);
  const onSubmit=(event)=>{
    event.preventDefault();
    if(toDo===""){
      return;
    }
    setToDO("");
    setToDos((curArr)=>[toDo, ...curArr]);
    
  }
  return <div>
    <h1>My To Dos({toDos.length})</h1>
   <form onSubmit={onSubmit}>
   <input 
    onChange={onChange} 
    value={toDo}
     type="text"
      placeholder="Write yout to do"/>
      <button>
        Add To Do
      </button>
   </form>
   <hr />
   <ul>
   {toDos.map((item, index)=><li key={index}>{item}</li>)}
   </ul>
  </div>
}
export default App;
