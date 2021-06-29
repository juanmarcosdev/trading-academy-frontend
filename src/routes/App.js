
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../containers/main/Home';
import LoginUser from '../containers/login/LoginUser';
import LoginAdmin from '../containers/login/LoginAdmin';

const App = () => ( 
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component = { Home } />
            <Route exact path = "/login" component = { LoginUser } />
            <Route exact path = "/adminauth" component = { LoginAdmin } />
        </Switch> 
    </BrowserRouter>
);

export default App;