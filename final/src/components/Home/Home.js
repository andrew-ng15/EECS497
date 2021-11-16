import React, { useEffect, useState } from 'react';
import classes from './Home.module.scss';
import { useHistory } from 'react-router-dom';
import { appAuth, signWithEmailAndPassword } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(appAuth);

    const history = useHistory();

    // const onClickHandler = (e) => {
    //     if (username === "" || password === "") {
    //         alert('Missing username or password');
    //         e.preventDefault();
    //     } else {
    //         history.push('/search/');
    //     }
    // };
    useEffect(() => {
        if (loading) {
        // maybe trigger a loading screen
        return;
        }
        if (user) history.replace("/search");
    }, [user, loading]);

    return (
        <div className={classes.Home}>
            <h1 className={classes.Header}>RATS Matcher</h1>
            <div className={classes.Form}>
                {/* <input
                    type="text"
                    placeholder="Username"
                    required name = "username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                /> */}
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                    />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    />
                <button value="login" onClick={() => signWithEmailAndPassword(email, password)} >
                Login
                </button>
                {/* <input type="hidden" name="operation" value="login" /> */}
            </div> 
            <div className={classes.Signup}>
                Don't have an account? <a href="/signup/"><b>Sign up</b></a>
            </div>
            
        </div>
    );
};

export default Home;
