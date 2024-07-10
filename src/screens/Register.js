import React from 'react'

function Register() {

    function handleRegister(event){
        event.preventDefault();//do not reload the screen on calling this function
        console.log("hello world");
    }
  
    return (
   
    <form>
        <input type = "email" placeholder='enter email'></input>
        <button onClick = {handleRegister}>submit</button>
    </form>
  );
}

export default Register