import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Pages
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Profile from "./pages/Profile";
import Paypal from "./pages/Paypal";
import Home from "./pages/Home";

// Redux
import { useSelector } from "react-redux";

const Router = () => {
    const user = useSelector((state) => state.user.user);
    //const user = "pepe";

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/checkout" component={Paypal} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/">
                    {user ? <Home /> : <Inicio />}
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
