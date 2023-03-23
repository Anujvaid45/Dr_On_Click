import "./Login.css";
import { Link } from "react-router-dom";
const Signup = () => {
    return ( 
        <main class="main">
	    <div class="container">
		    <section class="wrapper">
			    <div class="heading">
				    <h1 class="text text-large">Sign Up</h1>
			    </div>

				
			    <form name="signin" class="form">
                    <div class="input-control">
					    <label for="name" class="input-label" hidden>Full Name</label>
					    <input type="text" name="name" id="name" class="input-field" placeholder="Full Name" required/>
				    </div>
				    <div class="input-control">
					    <label for="email" class="input-label" hidden>Email Address</label>
					    <input type="email" name="email" id="email" class="input-field" placeholder="Email Address" required/>
				    </div>
				    <div class="input-control">
					    <label for="password" class="input-label" hidden>Password</label>
					    <input type="password" name="password" id="password" class="input-field" placeholder="Password" required/>
				    </div>
                    <div class="input-control">
					    <label for="repassword" class="input-label" hidden>Re-Password</label>
					    <input type="password" name="repassword" id="repassword" class="input-field" placeholder="Re-Enter Password" required/>
				    </div>

				    <div class="input-control">
					    <Link class="text text-links" to="/login">Already A User?</Link> 
					   <button className="input-submit">
                        <Link to="/login" style={{color:"white"}}>Submit</Link>
                       </button>
				    </div>
			    </form>
		    </section>
	    </div>
    </main>


        
     );
}
 
export default Signup;