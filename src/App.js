import { onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserAction } from "./actions/userAction";
import "./App.css";
import { auth } from "./firebase";
import Router from "./Router";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                dispatch(setUserAction(user));
            } else {
                // User is signed out
            }
        });
        // eslint-disable-next-line
    }, []);

    return (
        <div className="App">
            <Router />
        </div>
    );
}

export default App;
