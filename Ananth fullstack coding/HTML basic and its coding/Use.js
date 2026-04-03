import { useState } from "react";

function Use() {
    const[count,setCount]=useState(0);
    function inc()
    {
        setCount(count+1)
    }
  return (
    <div>
      <h2>Conter:{count}</h2>
      <button onClick={inc}>Click to increment the count.➕</button>
    </div>
  );
}

export default Use;
