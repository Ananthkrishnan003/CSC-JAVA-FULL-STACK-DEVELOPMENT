function Dem() {
    let x=100;
    let a=(x>=50)?<h2>X is greater</h2>:<h2>X is lesser</h2>
    let y=parseInt(prompt("Enter the value here👉: "));
    let b=(y>=100)?<h2>y is greater</h2>:<h2>y is lesser</h2>
  return (
    <div>
      <h1>{a}</h1>
      <h2>{b}</h2>
    </div>
  );
}

export default Dem;
