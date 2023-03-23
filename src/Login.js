import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
    return ( 
        
    <main class="main">
	    <div class="container">
		    <section class="wrapper">
			    <div class="heading">
				    <h1 class="text text-large">Sign In</h1>
				    <p class="text text-normal">New user? <span>
                        <Link to="/signup">Create An Account</Link>
                    </span>
				    </p>
			    </div>
			    <form name="signin" class="form">
				    <div class="input-control">
					    <label for="email" class="input-label" hidden>Email Address</label>
					    <input type="email" name="email" id="email" class="input-field" placeholder="Email Address" required/>
				    </div>
				    <div class="input-control">
					    <label for="password" class="input-label" hidden>Password</label>
					    <input type="password" name="password" id="password" class="input-field" placeholder="Password" required/>
				    </div>
				    <div class="input-control">
					    <Link class="text text-links" to="/password">Forgot Password</Link>
					    <input type="submit" name="submit" class="input-submit" value="Sign In" disabled/>
				    </div>
			    </form>
			
			
		    </section>
	    </div>
    </main>


        
     );
}
 
export default Login;