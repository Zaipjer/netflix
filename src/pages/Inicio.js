import React from "react";
import "./Inicio.css";
import logo from "../images/netflix-logo.png";
import { Typography } from "@mui/material";
import { useHistory } from "react-router";

const Inicio = () => {
    const history = useHistory();

    return (
        <div className="inicio">
            <img src={logo} alt="Logo" className="inicio__logo" />
            <button
                type="button"
                className="inicio__buttonSignin redButton button"
                onClick={() => history.push("/login")}
            >
                Iniciar sesión
            </button>
            <div className="inicio__info">
                <Typography variant="h3" gutterBottom>
                    Películas y series ilimitadas y mucho más.
                </Typography>
                <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                    Disfruta donde quieras. Cancela cuando quieras.
                </Typography>
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ marginBottom: "1rem" }}
                >
                    ¿Quieres ver Netflix ya? Ingresa tu email para crear una
                    cuenta o reiniciar tu membresía de Netflix.
                </Typography>
                <div className="inicio__inputBlock">
                    <input type="email" placeholder="Email address" />
                    <button type="button" className="redButton button">
                        Comenzar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
