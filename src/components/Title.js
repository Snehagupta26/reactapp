import React from 'react'

function Title({name , contactNumber , schoolName , collegeName , rollNo}) {
  return (
    <div>
         <h1 style = {{fontSize:100 , color:"red"}}>{name}</h1>
         <h1 style = {{fontSize:100 , color:"red"}}>{contactNumber}</h1>
         <h1 style = {{fontSize:100 , color:"red"}}>{schoolName}</h1>
         <h1 style = {{fontSize:100 , color:"red"}}>{collegeName}</h1>
         <h1 style = {{fontSize:100 , color:"red"}}>{rollNo}</h1>
    </div>
    //whenever we get a name from screen we can pass in into the component over here
  );
}

export default Title;