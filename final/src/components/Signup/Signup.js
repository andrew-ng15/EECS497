import React from 'react';
import classes from './Signup.scss';

const Signup = () => {


    return (
        <div>
            <h2 className={classes.Title}>Fill out some information for us:</h2>
            <div>
                <form action="/personalinfo/" method='GET'>
                    <input className={classes.Boxes} type="text" placeholder="Username" required name = "username" />
                    <input className={classes.Boxes} type="password" placeholder="Password" required name = "password" />
                    <input className={classes.Boxes} type="submit" value="continue" />
                    <input type="hidden" name="operation" value="signup" />
                </form> 
            </div>
        </div>
    );
};

export default Signup;
