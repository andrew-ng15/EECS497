import React, { useState, useEffect} from 'react';
import classes from './Signup.module.scss';
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from 'react-router-dom';
import {
  appAuth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

const Signup = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(appAuth);
    const history = useHistory();

    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/personalinfo");
    }, [user, loading]);
    
    // const onClickHandler = (e) => {
    //     if (username === "" || password === "") {
    //         alert('Missing username or password');
    //         e.preventDefault();
    //     } else {
    //         history.push('/personalinfo/');
    //     }
    // };

    return (
        <div className={classes.Container}>
            <h1>Sign Up</h1>
            <h2 className={classes.Title}>Fill out some information for us:</h2>
            <div>
                {/* <form action="/personalinfo/" method='GET'> */}
                <input
                    type="text"
                    className={classes.Boxes}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    className={classes.Boxes}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    placeholder="Password"
                    required name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className={classes.Boxes}
                />
                {/* <input
                    type="submit"
                    value="Continue"
                    className={classes.Boxes}
                    onClick={onClickHandler}
                /> */}
                <button className={classes.Boxes} onClick={register}>
                    Register
                </button>
                {/* <input type="hidden" name="operation" value="signup" /> */}
                {/* </form>  */}
            </div>
        </div>
    );
};

export default Signup;
