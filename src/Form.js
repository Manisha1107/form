import React from "react";

function Form(){
    return(
        <fillup className="Fill">
          <label for="Firstname">Firstname</label>
         <input type="text" id="name"/>
         <label for="Lastname">Lastname</label>
            <input type="text" id="name"/>
        <label for="Nickname">Nickname</label>
            <input type="text" id="name"/>
            <label for="Email">Email</label>
            <input type="email" id="mail"/>
            <label for="password">Password</label>
            <input type="password" id="pass"/>
            <label for=" DateOfBirth"> DateOfBirth</label>
           <input type="number" id="dob"/>
        </fillup>
         


    );
}
 export default Form;