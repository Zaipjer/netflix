import { combineReducers } from "redux";
import userReducer from "./userReducer";
import priceReducer from "./priceReducer";

export default combineReducers({
    user: userReducer,
    price: priceReducer,
});
