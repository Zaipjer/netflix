import { Typography } from "@mui/material";
import React from "react";
import "./Plans.css";
import { useDispatch } from "react-redux";
import {setPriceAction} from '../actions/priceAction';
import { useHistory } from "react-router";

const Plans = ({ cost, children, suscribe = false }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (cost) => {
        dispatch(setPriceAction(cost));
        history.push("/checkout");
    };

    return (
        <div className="plans">
            <Typography className="plans__standard" variant="h5">
                {children}
            </Typography>
            <button
                className={`button ${
                    suscribe ? "grayButton mediumWidth" : "redButton"
                }`}
                onClick={() => handleClick(cost)}
            >
                Suscribete
            </button>
        </div>
    );
};

export default Plans;
