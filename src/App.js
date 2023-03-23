import Navbar from './Navbar';
import './App.css';
import './Darkmode.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Password from './Password';
import Aboutus from './Aboutus';
import Services from './Services';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <Route exact path="/password">
            <Password></Password>
          </Route>
          <Route exact path="/aboutus">
            <Aboutus></Aboutus>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
        </Switch>

        
        
      </div>      
    </div>
    </Router>
  );
}

export default App;
