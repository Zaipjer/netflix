import { SET_PRICE } from "../types";

export function setPriceAction(price) {
    return async (dispatch) => {
        dispatch(setPrice(price));
    };
}

const setPrice = (price) => ({
    type: SET_PRICE,
    payload: price,
});
