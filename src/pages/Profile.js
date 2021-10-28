import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../components/Header";
import "./Profile.css";
import netflixavatar from "../images/netflixavatar.png";
import Plans from "../components/Plans";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { signOut } from "@firebase/auth";
import { useHistory } from "react-router";

const Profile = () => {
    const user = useSelector((state) => state.user.user);
    const price = useSelector((state) => state.price.price);

    const history = useHistory();

    const cerrarS = () => {
        signOut(auth)
            .then(() => {
                alert("Se ha cerrado sesión");
                history.push("/");
            })
            .catch((error) => {
                alert("No se ha podido cerrar sesión");
            });
    };

    useEffect(() => {
        if (!user) {
            history.push("/");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="profile">
            <Header />
            <Typography variant="h3" className="ProfileTitle">
                Edit Profile
            </Typography>
            <div className="profile__info">
                <img src={netflixavatar} alt="avatar" />
                <div className="profile__infodetails">
                    <div className="profile__infodetailsplans">
                        <Typography variant="h6">{user?.email}</Typography>
                        <Typography className="plansText" variant="h5">
                            Plans
                        </Typography>
                        <Plans
                            cost={139}
                            suscribe={price === 139 ? true : false}
                        >
                            Netflix Básico
                        </Plans>
                        <Plans
                            cost={196}
                            suscribe={price === 196 ? true : false}
                        >
                            Netflix Estándar
                        </Plans>
                        <Plans
                            cost={266}
                            suscribe={price === 266 ? true : false}
                        >
                            Netflix Premium
                        </Plans>
                        <button
                            type="button"
                            className="redButton button fullWidth"
                            onClick={cerrarS}
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
