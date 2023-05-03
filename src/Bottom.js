

function Bottom(){
    return(
        <div>
        <div className='radiobutton'>
            <label for="gender">Gender</label><br/>

            
            <label for="gender">Male</label>
             <input type="radio" name="gender" id="male"/>


           <label for="gender">Female</label>
             <input type="radio" name="gender" id="female"/>

           <label for="gender">Others</label>
            <input type="radio" name="gender" id="others"/><br/>

            <label for="Mobile">Mobile</label>
            <input type="number" id="Mobile"/><br/>

            
            
        <label for='address'> Address</label>
        <input type="text" id="address"/> <br/>

        <input type="submit" id="submit"/>
        <input type="reset" id="reset"/>

 
        </div>
        </div>
    )
}
export default Bottom;


