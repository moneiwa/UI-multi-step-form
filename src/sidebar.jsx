

function sidebar () {


    return ( 
        
        <div className="main-container">

        <nav>
            <div class="bg-img">
                <div class="container">
                    <div class="sidebar">
                        <a class="active" href="#">
            <div>
                                <>step 1<br></br></>
                                <>YOUR INFO</>
                            </div>
                            
                        </a>
                        <a href="#"> <img width='32' />
                        <div></div>
                            <>step 2<br>
                            </br></>
                            <></>SELECT PLAN</a>
                        <a href="#contact">ADD-ONS</a>
                        <a href="#about">SUMMARY</a>
                    </div>
                </div>
            </div>
            
           </nav>
            <div class="form">
                <form>
                <h1>Personal info</h1>
                    <label>Name:</label>
                    <input
                        type="text"
                        id="nameInput"
                        name="name" />

                    <label>email Address:</label>
                    <input
                        type="text"
                        id="emailInput"
                        name="email" />

                    <label>Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumberInput"
                        name="phoneNumber" />



                    <button type="submit">Submit</button>
                </form>
                </div>
            </div> /*  // end of form-contai */

            
       
        // end of main-contai


    

     );
}

export default sidebar ;