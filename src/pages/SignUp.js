import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { auth } from "../firebase";
import "./SignUp.css";

// Redux
import { useDispatch } from "react-redux";
import { setUserAction } from '../actions/userAction';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signUp, setSignUp] = useState(false);

    const dispatch = useDispatch();

    const SignIn = (e) => {
        e.preventDefault();
        if (signUp) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Usuario creado exitosamente");
                    dispatch(setUserAction(userCredential.user));
                })
                .catch((error) => {
                    alert(error.message);
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    dispatch(setUserAction(userCredential.user));
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
        setEmail("");
        setPassword("");
    };

    return (
        <div className="signup">
            <Typography variant="h5" align="left">
                {signUp ? "Crear Cuenta" : "Iniciar Sesión"}
            </Typography>
            <form className="signup__form" onSubmit={SignIn}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    required
                    style={{ marginBottom: "1rem" }}
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    autoComplete="current-password"
                    placeholder="Contraseña"
                    required
                    style={{ marginBottom: "2rem" }}
                />
                <button type="submit" className="redButton button fullWidth">
                    {signUp ? "Crear Cuenta" : "Iniciar Sesión"}
                </button>
                {!signUp ? (
                    <Typography>
                        ¿Eres nuevo en Netflix? {""}
                        <span
                            className="signup__formLink"
                            onClick={() => setSignUp(true)}
                        >
                            Crear cuenta ahora.
                        </span>
                    </Typography>
                ) : (
                    <Typography>
                        <span
                            className="signup__formLink"
                            onClick={() => setSignUp(false)}
                        >
                            Iniciar sesión ahora.
                        </span>
                    </Typography>
                )}
            </form>
        </div>
    );
};

export default SignUp;
