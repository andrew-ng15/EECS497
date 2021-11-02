import React, { useState } from 'react';
import classes from './Hobby.module.scss';
import { useHistory } from 'react-router-dom';

const Hobby = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const onClickHandler = (e) => {
        if (username === "" || password === "") {
            alert('Missing username or password');
            e.preventDefault();
        } else {
            history.push('/search/');
        }
    };

    return (
        <div className={classes.Hobby}>
            <h1 className={classes.Header}>RATS Matcher</h1>
            <form className={classes.Form} action="/test/" method='GET'>
                <input
                    type="text"
                    placeholder="Username"
                    required name = "username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required name = "password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <input type="submit" value="login" onClick={onClickHandler} />
                <input type="hidden" name="operation" value="login" />
            </form> 
            <div className={classes.Signup}>
                Don't have an account? <a href="/signup/"><b>Sign up</b></a>
            </div>
            
        </div>
    );
};

export default Hobby;
