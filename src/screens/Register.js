import React from 'react'

function Register() {

    function handleRegister(event){
        event.preventDefault();//do not reload the screen on calling this function
        console.log("hello world");
    }
    let age = 19;
    let emailId = "02sneha@gmail.com";

   
    return (
   
         //if user is above the age of 18 then only show this form
        //if user is not then show a msg
    <form>
        {/*conditional statement*/}
        {age > 18 && emailId == "02sneha@gmail.com" ? (
        <div>
        <input type = "email" placeholder='enter email'></input>
        <button onClick = {handleRegister}>submit</button>
        </div> ) : (<h1>you are a small kid dont use this website</h1>)
        }
    </form>
  );
}

export default Register;

//conditional rendering