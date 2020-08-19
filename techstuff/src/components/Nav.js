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
                    <h1>Use My tech stuff</h1>
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