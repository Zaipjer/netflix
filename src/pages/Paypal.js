import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Paypal.css";

const Paypal = () => {
    const price = useSelector((state) => state.price.price);
    const paypal = useRef();

    const history = useHistory();

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Netflix suscripcion TEST",
                                amount: {
                                    currency_code: "MXN",
                                    value: price,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                },
                onError: (err) => console.log(err),
            })
            .render(paypal.current);

        // eslint-disable-next-line
    }, []);
    return (
        <div ref={paypal} className="paypal">
            {price === 0 && history.push("/")}
        </div>
    );
};

export default Paypal;
