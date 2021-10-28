import { SET_PRICE } from "../types";

const initialState = {
    price: 0,
};

export default function priceReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRICE:
            return {
                ...state,
                price: action.payload,
            };
        default:
            return state;
    }
}
