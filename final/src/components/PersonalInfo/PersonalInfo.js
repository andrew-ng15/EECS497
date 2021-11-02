import React, { useState } from 'react';
import classes from './PersonalInfo.module.scss';
import { useHistory } from 'react-router-dom';

const PersonalInfo = () => {

    const history = useHistory();
    const [location, setLocation] = useState("");

    const onClickHandler = (e) => {
        if (location === ""){
            alert('Please input a location');
        } else {
            history.push('/hobbies/');
        }
    };

    return (
        <div className = {classes.PersonalInfo}> 
            <h1>Enter your location here:</h1>
            <div className = {classes.box}>
                <input type="text" id="fname" name="fname" />
            </div>
            <div className = {classes.par}>
                <u>Use my current location</u>
            </div>
            
            <div className= {classes.button}>
                <button type="button"
                    onClick={onClickHandler}
                    onChange={(event) => setLocation(event.target.value)}
                >
                    continue
                </button>
            </div>
        </div>
    );
};

export default PersonalInfo;
