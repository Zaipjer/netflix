import React, { useEffect } from "react";
import "./Login.css";
import logo from "../images/netflix-logo.png";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Login = () => {
    const user = useSelector((state) => state.user.user);
    const history = useHistory();

    useEffect(() => {
        if (!user) {
            history.push("/");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="login">
            <img src={logo} alt="Logo" className="login__logo" />
            <button
                type="button"
                className="login__buttonSignin redButton button"
            >
                Iniciar sesión
            </button>
            <div className="login__info">
                <SignUp />
            </div>
        </div>
    );
};

export default Login;
