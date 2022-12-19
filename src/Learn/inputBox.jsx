import React from "react"
export default function App2() {
   function getData(val) {
console.log(val.target.value);
    }
return(


    <div>
<h1>Get input Box !</h1>
<input type="Text" onChange={getData}/>

    </div>
)

}