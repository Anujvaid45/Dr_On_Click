import { Link } from "react-router-dom";
import Darkmode from "./Darkmode";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dr.On.Click</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/services">Services</Link>
                <Link to="/login">Login</Link>
                <Darkmode></Darkmode>
            </div>
        </nav>

     );
}
 
export default Navbar;