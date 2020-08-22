import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../App.css'
import Login from './Login';
import SignUp from './SignUp';
// import Renters from '../renters/Renters';
// import PrivateRoute from './PrivateRoute';

export default function Nav() {
    return (
        <Router>
            <div className="navBar">
                <div className="navTitle">
                <img class="mb-1" src="https://raw.githubusercontent.com/Use-My-Tech-Stuff-PT/Marketing-Page/orlando-rivera-jr/img/Use%20My%20Tech%20Horizontal%20Logo_Teal%20Icon.png" alt="" width="auto" height="72" />
                </div>
                <div className="navLinks">
                    <div className="linksContainer">
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Sign Up</Link>
                        <Link to='/renters'>Users</Link>
                    </div>
                </div>
                
            </div>
            <Switch>
                {/* <PrivateRoute exact path='/renters' component={Renters} /> */}
                <Route path='/login' render={(props) => <Login {...props} />} />
                <Route path='/signup' render={(props) => <SignUp {...props} />} />
            </Switch>
        </Router>
    )
}