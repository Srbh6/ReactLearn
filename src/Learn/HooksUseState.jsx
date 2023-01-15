import React, { useState } from "react";
export default function App7() {
const [data, setData]= useState("Saurabh")
  return (
    <div>
      <center>
        <h1>{data}</h1>
        <button onClick={()=>setData("Mishra")}> Click Me </button>
      </center>
    </div>
  );
}
