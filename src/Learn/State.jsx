// what is state 
// state is internal object of class can not accessible outside from class object : key
// state are changeable.
// state example
// button click update

// State is used to store the data of the
// ‘components that has to be rendered to the view

// State holds the data and can change over
// time

// State can only be used in class components,

// State is generally updated by event handlers

// State with functional Component
import React from "react"
function App1() {
    let Data = "Saurabh";
    function updateData(){
  Data = "Mishra";
  alert(Data);
  
    }
    return (
      <div className="App">
        <h1> {Data}<br></br>
        <button onClick={updateData}> Update data</button>
        </h1>
      </div>
    );
  }
  export default App1;