import React, { useState } from 'react';
import classes from './Signup.module.scss';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const onClickHandler = (e) => {
        if (username === "" || password === "") {
            alert('Missing username or password');
            e.preventDefault();
        } else {
            history.push('/personalinfo/');
        }
    };

    return (
        <div className={classes.Container}>
            <h1>Sign Up</h1>
            <h2 className={classes.Title}>Fill out some information for us:</h2>
            <div>
                <form action="/personalinfo/" method='GET'>
                <input
                    type="text"
                    placeholder="Username"
                    required name="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className={classes.Boxes}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className={classes.Boxes}
                />
                <input
                    type="submit"
                    value="Continue"
                    className={classes.Boxes}
                    onClick={onClickHandler}
                />
                <input type="hidden" name="operation" value="signup" />
                </form> 
            </div>
        </div>
    );
};

export default Signup;
