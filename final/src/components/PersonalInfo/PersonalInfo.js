import React, { useState, useEffect } from 'react';
import classes from './PersonalInfo.module.scss';
import { useHistory } from 'react-router-dom';
import { updateProfile, setPhoneNumber } from "firebase/auth";
import { appAuth, db } from "../firebase";
import { collection, getDoc, updateDoc, doc } from "firebase/firestore";

const PersonalInfo = () => {

    const history = useHistory();
    const [contact, setContact] = useState("");
    const [location, setLocation] = useState("");

    const onClickHandler = (e) => {
        if (location === ""){
            alert('Please input a location');
        } else {
            history.push('/hobbies/');
        }
        console.log(location);
    };

    const updateinfo = () => {
        if (location === ""){
            alert('Please input a location');
        }
        const ref = doc(db, "users", appAuth.currentUser.uid)
        updateDoc(ref, {
            contact: contact,
            location: location,
        })
        history.push('/hobbies/');
    };
    return (
        <div className={classes.PersonalInfo}> 
            {/* <h1>Enter your name here:</h1>
            <div className={classes.box}>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    onChange={(event) => setLocation(event.target.value)}
                />
            </div> */}
            <h1>Enter your contact info here:</h1>
            <div className={classes.box}>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    onChange={(event) => setContact(event.target.value)}
                />
            </div>
            <h1>Enter your location here:</h1>
            <div className={classes.box}>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    onChange={(event) => setLocation(event.target.value)}
                />
            </div>
            <div className={classes.par}>
                <u>Use my current location</u>
            </div>
            
            <div className={classes.button}>
                <button className={classes.Boxes} onClick={updateinfo}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default PersonalInfo;
