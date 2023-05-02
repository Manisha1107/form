

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
        <textarea id="address" name="address" row="4" cols="50" placeholder="Enter address"></textarea> <br/>

        <button type="submit" id="submit">Submit</button>
        <button type="reset" id="reset">Reset</button>


            

        
        
        </div>



        

        </div>
    )
}
export default Bottom;


