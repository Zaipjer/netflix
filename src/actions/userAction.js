import {
    SET_USER
} from '../types';

export function setUserAction(user){
    return async (dispatch) => {
        dispatch(setUser(user));
    }
}

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});