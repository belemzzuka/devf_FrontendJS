import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../views/Home';
import Signup from '../views/Signup';
import Login from '../views/Login';
import Item from '../views/Item';
import Navbar from '../components/Navbar';

const Logout = () => {
    window.localStorage.removeItem('token');
    return <Redirect to="/" />
}

export default function Routes() {
    return(
        <Router>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/item" component={Item} />
            <Route exact path="/logout" component={Logout} />
        </Switch>
    </Router>
    );
}
