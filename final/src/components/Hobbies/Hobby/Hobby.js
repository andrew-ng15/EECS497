import React, { useState } from 'react';
import classes from './Hobby.module.scss';
import { useHistory } from 'react-router-dom';

const Hobby = () => {
    const [hobby, setHobby] = useState("");

    const history = useHistory();

    const onClickHandler = (e) => {
        
    };

    return (
        <div className={classes.Hobby}>
            <input list="hobby_list" name="hobby_in" placeholder="Select Hobbies"/>
            <datalist id="hobby_list">
                <option value="Acting"/>
                <option value="Art"/>
                <option value="Astrology" />
                <option value="Comedy Shows"/>
                <option value="Concerts"/>
                <option value="Fitness"/>
                <option value="Food"/>
                <option value="Hang gliding"/>
                <option value="Kayaking"/>
                <option value="Movies"/>
                <option value="Music"/>
                <option value="Nightlife"/>
                <option value="Pottery"/>
                <option value="Sports"/>
                <option value="Travel"/>
                <option value="Volleyball"/>
            </datalist>
        </div>
    );
};

export default Hobby;
