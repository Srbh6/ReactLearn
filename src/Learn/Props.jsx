// what is props

// what is props
// Props are arguments passed into React components.
// Props are passed to components via HTML attributes.
// props stands for properties.
// we can no change the value with props are read only ( if we want to change the value we need to change the props into state then we can do )
//  passing the argument from parents tp child(supposed we want to greet every student in the class we only pass name thats it.

import React from "react";
function Student(X) {
   
  return (
    <div> 
        gi
          <h1> hello {X.name}</h1>
          <h2> Email : {X.email}</h2>

      </div>
  );
}
export default Student;
