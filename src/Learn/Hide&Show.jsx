import React from "react";

export default function App3() {
  let [status, setStatus] = React.useState(true); 
  //we an also use false i we want to hide the input filed
//   called State
  return (
    <div>
       {status? <h1>Hide Show the toggle !</h1> : null}
      <button onClick={() => setStatus(false)}> Hide</button> 
      <button onClick={() => setStatus(true)}> Show</button>
     {/* if we want to toggle means if any data or item is showing then do opposite */}
      {/* <button onClick={() => setData(!data)}> Toggle</button> */}
    </div>
  );
}
