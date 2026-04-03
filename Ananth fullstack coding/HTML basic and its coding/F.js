function F() {
    let a={
        color:'green'
    }
    function Click()
    {
        let x="Hello java full stack."
        console.log(x);

    }
    function fun(msg)
    {
           console.log(msg)
    }
    
  return (
    <div>
      <h2 style={a}>Events</h2>
      <button onClick={Click}>Click here to print output👉</button>
      <button  onClick={()=>fun("This is the last java frontend title of Reactjs.")}>Tap here to continue.👍</button>
    </div>
  );
}

export default F;
