//boilerplate code
//html
//<html>   </html>
import React from "react";
import Title from "../components/Title";
import UnorderedList from "../components/UnorderedList";
function About(){
 
    return (
        <div>
                <Title name = {"nodejs guides"} collegeName = {"amity"} schoolName ={"dps"} rollNo = {"12"} contactNumber = {"12345"}/>
                <UnorderedList />
                <Title name = "general"/>
                <Title name = "nodejs core concepts"/>
        </div>
    );
}
export default About;

//title
//ul - unorderedlist
//card
//reusablitiy - props