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
                <option value="Music"/>
                <option value="Art"/>
                <option value="Food"/>
                <option value="Travel"/>
                <option value="Fitness"/>
                <option value="Sports"/>
                <option value="Movies"/>
                <option value="Nightlife"/>
                <option value="Concerts"/>
                <option value="Volleyball"/>
                <option value="Comedy Shows"/>
                <option value="Pottery"/>
                <option value="Hang gliding"/>
                <option value="Kayaking"/>
            </datalist>
        </div>
    );
};

export default Hobby;
