
import { render } from "@testing-library/react";
import React, { useEffect, useState,useRef} from "react";

function Hooks() {
    // let[name,setName] =useState("")
    // const renderCount=useRef(0) 
    
    let [a,setA] = useState(0);
    let [b,setB] = useState(0);
    let [c,setC] = useState(0);
    let[total,setTotal]= useState(0)

    // useEffect(()=>{
    //     console.log("Use Ref", renderCount.current)
    //     // setRenderCount(prev=> prev+1)

    // },[])

    useEffect(()=>{
    setTotal(parseInt(a)+parseInt(b)-parseInt(c));
    })






  return <> 
  {/* <input value={name} onChange={(e)=>setName(e.target.value)}/>
  <div>My audi is {name}</div>
  <div> I renderend {renderCount.current} times</div> */}
  <input value={a} onChange={(e)=>setA(e.target.value)}/>
  <input value={b} onChange={(e)=>setB(e.target.value)}/>
  <input value={c} onChange={(e)=>setC(e.target.value)}/>
  <div>the total is {total }</div>

  </>;
}

export default Hooks;
