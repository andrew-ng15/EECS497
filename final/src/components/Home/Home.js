import React from 'react';
import classes from './Home.scss';

const Home = () => {


    return (
        <div>
            <h1 classes="Container">RATS Matcher</h1>
            <form action="/accounts/?target=/" method='POST'>
                <input type="text" placeholder="Username" required name = "username" />
                <input type="password" placeholder="Password" required name = "password" />
                <input type="submit" value="login" />
                <input type="hidden" name="operation" value="login" />
            </form> 
            Don't have an account? <a href="/test/"><b>Sign up</b></a>
        </div>
    );
};

export default Home;