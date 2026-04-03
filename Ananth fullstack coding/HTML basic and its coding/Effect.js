import {useState,useEffect} from "react";

function Effect() {
    const [count,setCount]=useState(5);
    const [count1,setCount1]=useState(500);
    useEffect(()=>{document.title=`message:${count}B:${count1}`})
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click here for counting🔢</button>
      <h2>Counter1:{count1}</h2>
      <button onClick={()=>setCount1(count1+1)}>Click here for counting🔢</button>
    </div>
  );
}

export default Effect;
