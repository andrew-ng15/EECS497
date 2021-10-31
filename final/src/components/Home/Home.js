import React from 'react';
import classes from './Home.module.scss';

const Home = () => {


    return (
        <div className={classes.Home}>
            <h1 className={classes.Header}>RATS Matcher</h1>
            <form className={classes.Form} action="/accounts/?target=/" method='POST'>
                <input type="text" placeholder="Username" required name = "username" />
                <input type="password" placeholder="Password" required name = "password" />
                <input type="submit" value="login" />
                <input type="hidden" name="operation" value="login" />
            </form> 
            <div className={classes.Signup}>
                Don't have an account? <a href="/signup/"><b>Sign up</b></a>
            </div>
            
        </div>
    );
};

export default Home;
