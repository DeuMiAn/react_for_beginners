import {useState, useEffect} from "react";

// function App() {
//   const [counter, setValue]=useState(0);
//   const [keyword,setKeyword]=useState("");
//   const onClick=()=>setValue((prev)=>prev+1);
//   const onChange=(event)=>setKeyword(event.target.value);
//   useEffect(()=>{
//     console.log("when both change Run");
//   },[keyword,counter]);
//   useEffect(()=>{
//     console.log("when 'counter' change i run")
//   },[counter]);
//   useEffect(()=>{
//     console.log("when 'keybord'change i run");
//   },[keyword])
  
//   return (
//     <div>
//       <input value={keyword}
//        type="text"
//         onChange={onChange} 
//         placeholder="Search here..."/>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }  //---------useEffect1
function Hello(){
  useEffect(()=>{
    console.log("created! ;)");
return ()=>console.log("destroyed :(");},[])
  return <h1>Hello</h1>
}
function App(){
  const [showing, setShowing]=useState(false);
  const onClick=()=>setShowing((prev)=>!prev);
  return (
    <div>
      {showing ? <Hello/>:null}
      <button onClick={onClick}>{showing ? "hide":"show"}</button>
    </div>
  )
}

export default App;
