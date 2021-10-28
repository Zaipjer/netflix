import React, { useEffect, useState } from "react";
import "./Header.css";
import { AppBar, Avatar, IconButton, Toolbar } from "@mui/material";
import {useHistory} from 'react-router-dom';
import logo from "../images/netflix-logo.png";

const Header = () => {
    const [show, setShow] = useState(false);
    const history = useHistory();

    const hideHeader = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", hideHeader);
    }, []);

    return (
        <AppBar
            position="sticky"
            elevation={0}
            className={`header ${show && "headertransparent"}`}
        >
            <Toolbar className="header__toolbar">
                <IconButton onClick={() => history.push("/")}>
                    <img
                        src={logo}
                        alt="Logo"
                        className="header__toolbarLogo"
                    />
                </IconButton>

                <Avatar variant="square" className="header__toolbarAvatar" onClick={() => history.push("/profile")}/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
